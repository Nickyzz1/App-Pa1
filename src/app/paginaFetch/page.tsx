"use client"
import {useEffect, useState} from "react"
interface IData
{
    name: string;
    id: number;
}

const FetchPage = () =>
{
    const [character, setcharacter] = useState<IData[]>([])

    useEffect(() => {
    
      const load = async () => 
      {
        const res = await fetch("https://rickandmortyapi.com/api/character/?page=20")
        const data = await res.json()
        setcharacter(data.results)
      }
      load() // printa duas veze spois o usestate sempre carrega duas veze s a página
    }, [])
    
    return(

        <>
        <div className="h-screen">

        <h1>Fetch nativo para requisições get</h1>

        {character.map((item) => {
            return(
            <div key={item.id}>
                <h2>{item.name}</h2>
            </div> 
            )
        })}
           
        </div>
        </>
    )
}

export default FetchPage;