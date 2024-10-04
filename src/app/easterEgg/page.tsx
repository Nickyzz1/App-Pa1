"use client"
import { useEffect } from "react";
import AOS from 'aos'; // Importando AOS
import 'aos/dist/aos.css'; 

const easterEgg = () => {
    const style = {
        container: "flex flex-col min-h-screen overflow-y-auto",
    };

    useEffect(() => {
        // Inicializa o AOS
        AOS.init({
            duration: 650,
            once: true
        });
    }, []); 

    return (

        <>
            {/* <div className="flex flex-wrap flex-col h-screen">
                <div data-aos="fade-up" className={style.container}>
                    <div>
                        <div className={style.content}>
                            <h1 className="text-center mt-4">Card 1</h1>
                            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium dolorum mollitia eveniet.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className={style.content2}>
                            <h1 className="text-center mt-4">Card 2</h1>
                            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium dolorum mollitia eveniet.</p>
                        </div>
                    </div>
                    <div>
                        <div className={style.content}>
                            <h1 className="text-center mt-4">Card 3</h1>
                            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium dolorum mollitia eveniet.</p>
                        </div>
                    </div>
                    <div>
                        <div className={style.content2}>
                            <h1 className="text-center mt-4">Card 4</h1>
                            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium dolorum mollitia eveniet.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={style.container }>
                <div className="w-96 bg-orange-200 self-start m-2 p-4  rounded-xl"data-aos="fade-up"
     data-aos-anchor-placement="center-center"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h1>Quadrado 1</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>
                <div className="w-96 bg-pink-200 self-end m-2 p-4  rounded-xl" data-aos="zoom-out-right">
                    <h1>Quadrado 2</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>
                <div className="w-96 bg-green-200 self-start m-2 p-4  rounded-xl" data-aos="flip-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <h1>Quadrado 3</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>

                <div className="w-96 bg-indigo-200 self-end m-2 p-4  rounded-xl" data-aos="zoom-in">
                    <h1>Quadrado 1</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>
                <div className="w-96 bg-orange-200 self-start m-2 p-4  rounded-xl" data-aos="zoom-out-up">
                    <h1>Quadrado 1</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>
                <div className="w-96 bg-pink-200 self-end m-2 p-4  rounded-xl" data-aos="fade-down">
                    <h1>Quadrado 2</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                </div>
            </div>

        </>
    );
}

export default easterEgg;
