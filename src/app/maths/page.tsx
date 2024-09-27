"use client" // sempre que usar um hook
import React, {useState} from "react"

//imports, declaraçao do componente, retiunr só o que é visto e o export, no inicio component vc coloca o typescript depois o return

// variavel com mpetod de setra o valor dela
//recah hooks começa com um valor inical
// use callback use memo use context use effect use state
// copila uma vez client e outra server 

const Maths: React.FC = () =>{

    const style = {
        btn: "bg-blue-950 text-white rounded p-2",
        form: "flex justify-center"

    }

    const [number2, setNumber2] = useState<string>("");
    const [number1, setNumber1] = useState<string>("");
    const [resp, setResp] = useState<number | undefined >();
    
    const msgError= "digite um número válido"
 
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

            <div>

            <form className={style.form} action=""/>
                <label htmlFor="n1">Numero 1</label>
                <input name="n1" id="n1" type="text" value={number1} onChange={(event) => setNumber1(event.target.value)}/>
                </div>
                <div>
                <label htmlFor="n2">Numero 2</label>
                <input name="n2" id="n2" type="text" value={number2} onChange={(event) => setNumber2(event.target.value)}/>

            </div>

            <div>
                
                <h2>soma</h2>
                {/* se é uum numero, se resp existe então nan */}
                <button className={style.btn} onClick={handleSoma}>somar</button>
                <h2>subtração</h2>
                <button className={style.btn} onClick={handleSub}>subtrair</button>
                 <h2>multiplicaçaõ</h2>
                <button className={style.btn} onClick={handleMult}>multiplicar</button>
                 <h2>divisão</h2>
                <button className={style.btn} onClick={handleDiv}>dividir</button>
                {/* {!isNaN(resp ?? NaN) ? resp : msgError} */}

            <form/>
            </div>
        </>
    )

}

export default Maths;