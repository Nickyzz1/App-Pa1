/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => 
    { // / retona um arr de obj
        return [
            {
                source: "/",
                destination: "/home",

            },
            {
                source: "/matematicas",
                destination: "/maths"
            },
            {
                source: "/funcao-reaproveitada", //nome que vai aparecer na url
                destination: "/general-function" //nome da pasta de destino identica
            },
            {
                source: "/paginaBonita",
                destination: "/paginaBonita"
            },
            {
                source: "/easterEgg",
                destination: "/easterEgg"
            },
        ]
    }
};

export default nextConfig;
