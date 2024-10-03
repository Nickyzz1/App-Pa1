"use client"
import { randomInt } from "crypto";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable'; 

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
        container: "flex flex-col h-screen justify-center items-center bg-gradient-to-r from-slate-950 to-slate-800 ",
        box: "flex flex-col handle justify-center items-center bg-indigo-950 text-white w-auto h-auto p-6 rounded-lg shadow-[0_5px_20px_-2px_rgba(255,255,255,0.3)] cursor-grab",
        input: "rounded m-4 p-4 text-black",
        btn: "bg-indigo-900 m-4 p-4 rounded hover:bg-indigo-700 focus shadow-[0_5px_2px_2px_rgba(255,255,255,0.3)]"
    }

    return(
        <>
            <div className={style.container} >
            <Draggable>
                    <div className={style.box}>
                        <h1 className="text-2xl">Função reaproveitada</h1>
                        <div>
                            <input className={style.input} type="text" placeholder="numero 01"  value = {numero1} onChange={(e) => setNumero1(e.target.value)}/>
                        </div>
                        <div>
                            <input className={style.input} type="text" placeholder="numero 02" value = {numero2} onChange={(e) => setNumero2(e.target.value)} />
                        </div>
                        <div>
                            <button className={style.btn} onClick={() => handleAll({a:numero1, b: numero2})} >calcular todos</button>
                        </div>
                        <div>
                            <h2>Resultado da Soma</h2>
                            <p>{respSoma ? respSoma : erro}</p>
                        </div>
                        <div>
                            <h2>Resultado da Subtração</h2>
                            <p>{(numero1.trim() !== "" && numero2.trim() !== "" && !isNaN(respSub ?? NaN)) ? respSub : (numero1.trim() === "" || numero2.trim() === "" ? "" : erro)}</p>
                            {/* {!isNaN( respSub?? NaN) ? respSub: erro } o ? verifica se o campo é um numero ou é undefined, se foir undefined retornsn Nan caso contario é verdadeiro */}
                        </div>
                        <div>
                            <h2>Resultado da Multiplicação</h2>
                            <p>{(numero1.trim() !== "" && numero2.trim() !== "" && !isNaN(respMult ?? NaN)) ? respMult : (numero1.trim() === "" || numero2.trim() === "" ? "" : erro)}</p>
                        </div>
                        <div>
                            <h2>Resultado da Divisão</h2>
                            <p>{(numero1.trim() !== "" && numero2.trim() !== "" && !isNaN(respDiv ?? NaN)) ? respDiv : (numero1.trim() === "" || numero2.trim() === "" ? "" : erro)}</p>
                        </div>
                    </div>
            </Draggable>
            </div>

        </>

    );

}

export default GeneralFunction;