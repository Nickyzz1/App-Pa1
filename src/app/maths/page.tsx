"use client" // sempre que usar um hook
import React, {useState} from "react"

//imports, declaraçao do componente, retiunr só o que é visto e o export, no inicio component vc coloca o typescript depois o return

// variavel com mpetod de setra o valor dela
//recah hooks começa com um valor inical
// use callback use memo use context use effect use state
// copila uma vez client e outra server 

const Maths: React.FC = () =>{

    const style = {
        btn: "bg-indigo-950 text-white rounded p-2 hover:bg-indigo-700",
        form: "w-2/4 h-auto flex items-center justify-center bg-indigo-800 flex-col text-white rounded-lg p-4",
        center: "h-screen flex justify-center items-center",
        input: "rounded p-4 text-black",
        title: "",
        label:"m-2",
        oper: "flex flex-row items-center m-4 gap-4"

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
            <h1>Use client com controle de estado</h1>

            

        <div className={style.center}>
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
                                  <div className="bg-indigo-950 p-2 rounded">{!isNaN(resp ?? NaN) ? resp : msgError}</div>
            </div>
        </div>
        </>
    )

}

export default Maths;