import {Card} from "@/components/card"

const paginaBonita = () =>
{

    const style = 
    {
        body: "text-white bg-gradient-to-r from-slate-950 to-slate-800 flex flex-wrap flex-row w-screen min-h-screen h-auto justify-center items-center "
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