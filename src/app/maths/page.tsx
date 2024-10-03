"use client" // sempre que usar um hook
import React, {useState} from "react"
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

//imports, declaraçao do componente, retiunr só o que é visto e o export, no inicio component vc coloca o typescript depois o return

// variavel com mpetod de setra o valor dela
//recah hooks começa com um valor inical
// use callback use memo use context use effect use state
// copila uma vez client e outra server 

const Maths: React.FC = () =>{

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // 0 0px 218px 184px rgba(255,255,255,0.0201)

    const style = {
        form: "w-auto h-auto flex flex-wrap items-center justify-center bg-gradient-to-r from-cyan-950 to-cyan-700  flex-col text-white rounded-lg p-4 shadow-[0_2px_100px_20px_rgba(255,255,255,0.1)] cursor-grab",
        btn: "bg-cyan-950 text-white rounded p-2 hover:bg-cyan-700 shadow-[0_5px_2px_2px_rgba(255,255,255,0.3)]",
        center: "flex-wrap h-screen flex justify-center items-center",
        input: "flex-wrap rounded p-4 text-black w-auto",
        title: "",
        label:"m-2",
        oper: "flex flex-wrap flex-row items-center m-4 gap-4"

    }

    const [number2, setNumber2] = useState<string>("");
    const [number1, setNumber1] = useState<string>("");
    const [resp, setResp] = useState<number | undefined >();
    
    const msgError= "Digite um número válido"
 
    const handleSoma = () => 
    {
            const n1 = parseFloat(number1)
            const n2 = parseFloat(number2)

            if(!isNaN(n1) && !isNaN(n2)) //se isso for um numero pois nega nn ser um numero "n1??"" == boolean
            {
                setResp(n1 + n2)
            }
            else{
                setResp(undefined)
            }
    }

    const handleSub = () => 
        {
            const n1 = parseFloat(number1)
            const n2 = parseFloat(number2)

            if(!isNaN(n1) && !isNaN(n2)) //se isso for um numero pois nega nn ser um numero "n1??"" == boolean
            {
                setResp(n1 - n2)
            }
            else{
                setResp(undefined)
            }
        }

    const handleMult = () => 
            {
                const n1 = parseFloat(number1)
                const n2 = parseFloat(number2)
    
                if(!isNaN(n1) && !isNaN(n2)) //se isso for um numero pois nega nn ser um numero "n1??"" == boolean
                {
                    setResp(n1 * n2)
                }
                else{
                    setResp(undefined)
                }
            }
    const handleDiv = () => 
        {
            const n1 = parseFloat(number1)
            const n2 = parseFloat(number2)
            
            if(!isNaN(n1) && !isNaN(n2)) //se isso for um numero pois nega nn ser um numero "n1??"" == boolean
            {
                setResp(n1 / n2)
            }
           else{
                setResp(undefined)
            }
        }

    return(
        <>
                <div className={"text-white bg-gradient-to-r from-slate-950 to-slate-800 text-center"}>
                    <h1 className="text-4xl p-4">Use client com controle de estado</h1>
                
                
                <div className={style.center}>
                <Tilt  options={defaultOptions} >
                    <div className={style.form}>
                                <h1 className={style.title}>ESCOLHA UM NÚMERO</h1>
                                    <label className={style.label} htmlFor="n1">Numero 1</label>
                                    <input className={style.input} name="n1" id="n1" type="text" value={number1} onChange={(event) => setNumber1(event.target.value)}/>
                                    <label className={style.label} htmlFor="n2">Numero 2</label>
                                    <input className={style.input} name="n2" id="n2" type="text" value={number2} onChange={(event) => setNumber2(event.target.value)}/>
                
                                    {/* se é uum numero, se resp existe então nan */}
                
                                        <div className={style.oper}>
                                            <button className={style.btn} onClick={handleSoma}>somar</button>
                                            <button className={style.btn} onClick={handleSub}>subtrair</button>
                                            <button className={style.btn} onClick={handleMult}>multiplicar</button>
                                            <button className={style.btn} onClick={handleDiv}>dividir</button>
                                        </div>
                                        <h1>Resposta</h1>
                                          <div className="bg-cyan-950 p-2 rounded  shadow-[0_5px_2px_2px_rgba(255,255,255,0.3)] m-4">{!isNaN(resp ?? NaN) ? resp : msgError}</div>
                    </div></Tilt>
                        </div>
                            
                </div>
            
        </>
    )

}

export default Maths;