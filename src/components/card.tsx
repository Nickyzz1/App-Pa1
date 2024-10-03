"use client"
import Image, { StaticImageData } from "next/image";
import festa from "../app/assets/img/festa.jpg"
import guittar from "../app/assets/img/guittar.jpg"
import vinil from "../app/assets/img/vinil.jpg"
import { Tilt } from 'react-tilt'
import { useState } from 'react';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Card = () => 
{
     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dados : {imagem: StaticImageData; titulo: string }[] = [

        {
            imagem: festa,
            titulo: "nn sei"
        },
        {
            imagem: guittar,
            titulo: "nn sei 2"
        },
        {
            imagem: vinil,
            titulo: "nn sei 2"
        }
    ]
    const style = 
    {
        box: "flex flex-wrap items-center justify-center",
        container: "text-center flex flex-wrap flex-col bg-white h-auto m-2 w-80 text-black h-auto rounded-xl shadow shadow-[0_0px_60px_-15px_rgba(0,0,0)] overflow-hidden object-cover hover:scale-[1.3] ease-linear duration-200 z-50 cursor-grab hover:z-50",
        titles: "mt-2",
        p: "m-4",
        pFooter: "text-white flex flex-col text-center m-2 mx-6",
        footer: "bottom-0 bg-orange-600 flex flex-row h-20 justify-between items-center justify-center",
        tilt: "height: 250, width: 250"
       
    }


    return (
        <>

        {dados.map((item, index) =>  (

        <Tilt   
        options={defaultOptions}  
        key={index} 
        onMouseEnter={() => setHoveredIndex(index)} // Define o índice do card quando o mouse entra
        onMouseLeave={() => setHoveredIndex(null)} // Reseta o índice quando o mouse sai
      >

            <div className={style.box} key={index}>
            <div className={style.container}>
            <Image className="max-h-40 object-cover" src={item.imagem} alt=""/>
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
            </div>
        </Tilt>
        ))}
        </>
    );

}