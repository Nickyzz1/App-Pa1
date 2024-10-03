import Image from "next/image";
import type { Metadata } from "next";
import {Form} from '@/components/form'


export const metadata: Metadata = {
  title: "Apt aprendizagem",
  description: "aprendizagem senai", //permite otimizar o seo quando há pesquisa
};

export default function Home() {
  return (

    <div className="text-white h-screen bg-gradient-to-r from-slate-950 to-slate-800">
    <div className="text-center text-4xl p-4">
      <h1>Bem vindo!</h1>
    </div>

    <div className="flex flex-wrap flex-col justify-center items-center">
      <Form/>
      </div>

    </div>
   
  );
}
