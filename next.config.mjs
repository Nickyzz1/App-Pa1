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
                source: "/funcao-reaproveitada",
                destination: "/general-function"
            },
            {
                source: "/paginaBonita",
                destination: "/paginaBonita"
            },
        ]
    }
};

export default nextConfig;
