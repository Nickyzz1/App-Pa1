// import dos modulos
import {Roboto} from "next/font/google"
import localFont from "next/font/local";

//imports internos
import "./globals.css";
import {Menu} from '@/components/menu'
import {Footer} from '@/components/footer'
import {Form} from '@/components/form'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roboto = Roboto(
  {
    weight: ["100", "400", "900"],
    style: "normal",
    variable: "--roboto",
    subsets: ["latin"]
  }
)

// export const metadata: Metadata = {
//   title: "Apt aprendizagem",
//   description: "aprendizagem senai", //permite otimizar o seo quando há pesquisa
// };

export default function RootLayout({
  children, //apenas um nome
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
       <Menu op1="dudu" op2 ='kau' op3={false} op4 = {2} />
        {children}
      {<Footer op1="nos contate:" op2= "41999999999"/> }
      </body>
    </html>
  );
  // layout através do body
}
