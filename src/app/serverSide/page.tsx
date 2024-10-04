import Link from "next/link";
import React, { Suspense } from "react"

type IData =
{
    results:
    {
        name: string;
        // status: string;
        id: string;
    }[]
}
//usar type ou interface
const ServerSide = async () =>{

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()
    console.log(data)

    return(
        <>
        <div className="h-screen">
            <h1>Server Side Redering</h1>
            <Suspense fallback = { <div> Loading..</div>}>
            {data.results.map((item, index) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        {/* <p>{item.status}</p> */}
                        <Link href={`/perso/${item.id}`}>ABRIR</Link>
                    </div>
                )
            })}
            </Suspense>
        </div>
        </>
    )
}

export default ServerSide;