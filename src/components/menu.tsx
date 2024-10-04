import {ROUTES} from "@/constants/routes"
import Link from "next/link";

// interface IMenu =
// {
//     op1: String | undefined | null;
//     op2: String;
//     op3: String;
//     op4: String;
// }

//interfaces podem ser extendidas mas tipos nn
// tipos podem representar coisa smais coplexas como interceções
// interface IOutra 
// {
//     IMenu[];
// }


export const Menu = ({op1, op2, op3, op4, op5, op6, op7, op8} : 
{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
    op6: string;
    op7: string;
    op8: string;
}

// a ? quer dizer argumento opcoional, pessimo para performance

) =>{
    const style = 
    {
    p:"text-white bg-cyan-700 p-2 rounded hover:bg-cyan-600",
    nav:"flex flex-wrap text-white bg-cyan-800 gap-3 p-3 text-large flex-row justify-center align-center font-comic"
    }

    return(
        <>
         <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p} >{op1}</Link>
          <Link href={ROUTES.maths} className={style.p}>{op2}</Link>
          <Link className={style.p} href={ROUTES.generalFunction}>{op3}</Link>
          <Link className={style.p} href={ROUTES.paginaBonita}>{op4}</Link>
          <Link className={style.p} href={ROUTES.easteregg}>{op5}</Link>
          <Link className={style.p} href={ROUTES.paginaFetch}>{op6}</Link>
          <Link className={style.p} href={ROUTES.axiosPage}>{op7}</Link>
          <Link className={style.p} href={ROUTES.serverPage}>{op8}</Link>
        </nav>
        </>
    );
}