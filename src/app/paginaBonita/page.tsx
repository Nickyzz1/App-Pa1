import {Card} from "@/components/card"

const paginaBonita = () =>
{

    const style = 
    {
        body: " flex flex-row justify-center items-center bg-black h-screen text-white bg-gradient-to-r from-slate-950 to-slate-800"
    }

    return(
        <>

        <div className={style.body}>
       
        <Card/>

        </div>
        </>
    );

}

export default paginaBonita;