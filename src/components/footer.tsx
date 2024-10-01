import Link from "next/link";

export const Footer = ({op1, op2} : { op1: string; op2: string; }

// fragment pois o retunr só pdoe ter um filho

) =>{

    const style = 
    {
    container:"bg-cyan-800 bottom-0 w-screen ",
    }

    return(
        <>
         <footer className={style.container}>
          <p>{op1}</p>
          <p>{op2}</p>
        </footer>
        </>
    );
}