import Link from "next/link";

export const Form = () =>{

    const style = 
    {
    content:" self-center text-white bg-cyan-800 gap-3 p-3 font-robFont flex justify-center align-center flex-col m-40 rounded-2xl p-8 items-center shadow-2xl",
    input: "rounded p-2 w-full",
    btn: "bg-blue-500 w-64 p-4 rounded hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:bg-cyan-500focus:ring-opacity-50 mt-8 ease-in"
    }
    return(
        <>
        <form className={style.content} action="" method="post">
        <h1>Faça login</h1>
        <label htmlFor="email"></label>
        <input className={style.input} type="email" id="email" name="email" placeholder="Digite seu email"/>
        <label htmlFor="password"></label>
        <input className={style.input} type="password" id="password" name="password" placeholder="Digite sua senha"/>

        <button className={style.btn} type="submit" >SIGN IN</button>

        </form>
        </>
    );
}