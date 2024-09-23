import Image from "next/image";
import type { Metadata } from "next";
import {Form} from '@/components/form'

export const metadata: Metadata = {
  title: "Apt aprendizagem",
  description: "aprendizagem senai", //permite otimizar o seo quando há pesquisa
};

export default function Home() {
  return (

    <div className="h-screen">
    <h1>Bem vindo!</h1>

    <Form/>
    </div>
   
  );
}
