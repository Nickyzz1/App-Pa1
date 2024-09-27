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
        ]
    }
};

export default nextConfig;
