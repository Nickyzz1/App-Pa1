// import dos modulos
import {Comic_Neue} from "next/font/google"
import localFont from "next/font/local";

//imports internos
import "./globals.css";
import {Menu} from '@/components/menu'
import {Footer} from '@/components/footer'

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
// const roboto = Roboto(
//   {
//     weight: ["100", "400", "900"],
//     style: "normal",
//     variable: "--roboto",
//     subsets: ["latin"]
//   }
// )

const comic = Comic_Neue(
  {
    weight: ["300", "400", "700"],
    style: "normal",
    variable: "--comic",
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
        className={`${comic.variable} antialiased font-comic`}>
       <Menu op1="home" op2 ='maths' op3="calculator" op4="pagina bonita"/>
        {children}
      {<Footer op1="nos contate:" op2= "41999999999"/> }
      </body>
    </html>
  );
  // layout através do body
}
