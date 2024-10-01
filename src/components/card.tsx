import Image from "next/image";
import festa from "../app/assets/img/festa.jpg"

export const Card = () => 
{
    const dados : {imagem: string, titulo: string }[] = [

        {
            imagem: "sla",
            titulo: "nn sei"
        },
        {
            imagem: "sla2",
            titulo: "nn sei 2"
        }
    ]
    const style = 
    {
        container: "text-center flex flex-col wrap bg-white h-auto m-2 w-80 text-black h-auto rounded-xl shadow shadow-[0_0px_60px_-15px_rgba(0,0,0)] overflow-hidden",
        titles: "mt-2",
        p: "m-4",
        pFooter: "text-white flex flex-col text-center m-2 mx-6",
        footer: "bottom-0 bg-orange-600 flex flex-row h-20 justify-between items-center justify-center"
       
    }


    return (
        <>

{/*         
        {

            dados.map((item, index) =>  (

                <div key={index}>
                    <h1>item.imagem</h1>
                </div>
            )
            )
        } */}

       <div className={style.container}>
        <Image className="" src={festa} alt=""/>

        <div className={style.titles}>
            <h6 className={"text-orange-600"} ><strong>1 week ago</strong></h6>
            <h1 className={"text-lg"} ><strong>Post two</strong></h1>
        </div>

        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem mollitia aliquam vitae consequuntur odio nam qui provident in tenetur animi totam, ipsa, quas vel molestiae corporis similique. Tempore, ipsa.</p>

        <div className={style.footer}>


                    <p className={style.pFooter}><strong>4</strong> READ</p>
                    <p className={style.pFooter}><strong>7152</strong> VIWES</p>
                    <p className={style.pFooter}><strong>21</strong> COMENTS</p>

        </div>

       </div>
        </>
    );

}