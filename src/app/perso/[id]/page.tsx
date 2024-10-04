import React from "react";
import Image from "next/image";
// type quando é array
interface IPerso {
    params:
    {
        id: string;
    }
}

interface IData 
{
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex{
    results: IData[];
}

const Perso = async({params: {id}} : IPerso) =>
{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data : IData = await res.json()

    const style =
    {
        container: "flex flex-wrap justify-center",
        box: "flex flex-col flex-wrap bg-cyan-700 text-white object-cover overflow-hiden rounded p-8 m-4 shadow-[0_10px_33px_1px_rgba(255,255,255,0.1)]",
        img: "h-auto mt-6 w-[460px] rounded object-cover"
    }
    //o seo coloca a página que ele lê primeiro no google, se o cliente quer aparecer primeiro tem qwue ter otimização

    return(
        <div className="h-screen">
            <div className={style.container}>
                <div className={style.box}>
                    <div className="flex self-center gap-6">
                        <h1>ID: {data.id}</h1>
                        <p>Name: {data.name}</p>
                    </div>

                    <p className="flex self-center gap-6">Status: {data.status}</p>
                    <p className="flex self-center gap-6">Specie: {data.species}</p>

                    <Image className={style.img} src={data.image} alt="Photo" width={200} height={200} priority></Image>

                </div>
            </div>
        </div>
    )
}

export default Perso;
// INDEXAR ESTATICAMENTE, AGORA VC DEIXA MAIS RÁPIDO
export async function generateStaticParams(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IDataStaticIndex = await res.json();

    return data.results.map((item)=>{
        item.id.toString()
    })
}