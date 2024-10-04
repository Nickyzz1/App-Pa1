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

const Perso = async({params: {id}} : IPerso) =>
{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data : IData = await res.json()

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="Photo" width={200} height={200} priority></Image>
        </div>
    )
}

export default Perso;