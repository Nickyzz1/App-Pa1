import Link from "next/link";

export const Form = () =>{

    const style = 
    {
    container: "flex flex-wrap flex-col justify-center items-center ",
    content:"flex flex-wrap bg-cyan-900 flex-col w-auto items-center justify-center text-white rounded p-2 m",
    input: "rounded p-2 w-auto text-black m-2",
    btn: "bg-cyan-800 p-2 m-2 rounded hover:bg-cyan-700"
    }
    return(
        <>
        <div className={style.container}>
            <form className={style.content} action="" method="post">
            <h1>Faça login</h1>
            <label htmlFor="email"></label>
            <input className={style.input} type="email" id="email" name="email" placeholder="Digite seu email"/>
            <label htmlFor="password"></label>
            <input className={style.input} type="password" id="password" name="password" placeholder="Digite sua senha"/>
            <button className={style.btn} type="submit" >SIGN IN</button>
            </form>
        </div>
        </>
    );
}