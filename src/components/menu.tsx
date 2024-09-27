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


export const Menu = ({op1, op2, op3, op4} : 
{
    op1: string;
    op2: string;
    op3?: boolean;
    op4: number;
}

// a ? quer dizer argumento opcoional, pessimo para performance

) =>{
    const style = 
    {
    p:"text-white bg-cyan-700 px-2 py-1 w-18",
    nav:"text-white bg-cyan-800 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center"
    }

    return(
        <>
         <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p} >{op1}</Link>
          <Link href={ROUTES.maths} className={style.p}>{op2}</Link>
          <p className={style.p}>{op3}</p>
          <p className={style.p}>{op4}</p>
        </nav>
        </>
    );
}