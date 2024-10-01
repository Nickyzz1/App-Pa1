"use client"
import { randomInt } from "crypto";
import { useState } from "react";

interface HandleProps{
    a: string,
    b: string
}


const GeneralFunction: React.FC = () => 
{
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")

    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respMult, setRespMult] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()

    const erro = "Digite corretamente, Sr. usuário"

    const handleAll = ({a,b}: HandleProps) => 
        {
            const n1 = parseFloat(a) 
            const n2 = parseFloat(b) 

            if(!isNaN(n1) && !isNaN(n2))
            {
               setRespSoma(n1 + n2)
               setRespSub(n1-n2)
               setRespMult(n1*n2)
               setRespDiv(n2 !== 0 ? n1/n2: undefined)
            } else {

                setRespSoma(undefined)
                setRespSub(undefined)
                setRespMult(undefined)
                setRespDiv(undefined)
            }
        } 
    {

    }

    const style = 
    {
        container: "h-screen"
    }


    return(
        <>
            <div className={style.container} >
                <h1>função reaproveitada</h1>
                <div>
                    <input type="text" placeholder="numero 01"  value = {numero1} onChange={(e) => setNumero1(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="numero 02" value = {numero2} onChange={(e) => setNumero2(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => handleAll({a:numero1, b: numero2})} >calcular todos</button>
                </div>
                <div>
                    <h2>soma</h2>
                    <p>{!isNaN( respSoma?? NaN) ? respSoma: erro }</p>
                </div>
                <div>
                    <h2>subtração</h2>
                    <p>{!isNaN( respSub?? NaN) ? respSub: erro }</p>
                </div>
                <div>
                    <h2>Multiplicação</h2>
                    <p>{!isNaN( respMult?? NaN) ? respMult: erro }</p>
                </div>
                <div>
                    <h2>divisão</h2>
                    <p>{!isNaN( respDiv?? NaN) ? respDiv?.toFixed(1): erro }</p>
                </div>
            </div>

        </>

    );

}

export default GeneralFunction;