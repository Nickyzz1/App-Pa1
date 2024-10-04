/** @type {import('next').NextConfig} */
const nextConfig = {

    images:
    {
        remotePatterns: [
            {protocol: "https", 
            hostname: "rickandmortyapi.com"}]
    },

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
            {
                source: "/pagina-com-fetch",
                destination: "/paginaFetch"
            },
            {
                source: "/pagina-com-axios",
                destination: "/paginaAxios"
            },
            {
                source: "/pagina-server-side",
                destination: "/serverSide"
            },
        ]
    }
};

export default nextConfig;
