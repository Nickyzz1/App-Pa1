
// shadow-[0_2px_500px_518px_rgba(0,0,0,0.7)]
"use client"
import { useEffect, useState } from "react";
import AOS from 'aos'; // Importando AOS
import 'aos/dist/aos.css'; 

const EasterEgg = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal
    const style = {
        bg: "bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen overflow-y-auto",
        container: "flex flex-col mt-12 m-8",
        modal: "fixed top-0 left-0 w-full h-full flex items-center justify-center",
        modalContent: "w-96 bg-gradient-to-t from-orange-200 to-orange-400 p-4 rounded-xl shadow-[0_2px_500px_518px_rgba(0,0,0,0.7)]"
    };

    useEffect(() => {
        // Inicializa o AOS
        AOS.init({
            duration: 650,
            once: true
        });
    }, []); 

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={style.bg}>
                <div className={style.container}>
                    <div className="w-96 bg-gradient-to-t from-orange-200 to-orange-400 m-2 p-4 rounded-xl shadow-[0_2px_30px_18px_rgba(255,255,255,0.1)]" data-aos="fade-up">
                        <h1>Quadrado 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque?...</p>
                        <button className="bg-orange-400 p-2 rounded hover:bg-orange-500" onClick={openModal}>Clique aqui</button>
                    </div>
       
                    <div className="w-96 bg-gradient-to-t from-pink-200 to-pink-400 self-end m-2 p-4  rounded-xl shadow-[0_2px_30px_18px_rgba(255,255,255,0.1)] " data-aos="zoom-out-right">
                    <h1>Quadrado 2</h1>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque? Odio delectus obcaecati ut error eum facere molestias accusantium quos voluptatum maxime. Omnis maiores tenetur nemo accusantium eum. Possimus, architecto.</p>
                    </div>
                     <div className="w-96 bg-gradient-to-t from-green-200 to-green-400 self-start m-2 p-4  rounded-xl shadow-[0_2px_30px_18px_rgba(255,255,255,0.1)] " data-aos="flip-left" data-aos-easing="ease-out-cubic"
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
                 

                    {isModalOpen && (
                        <div className={style.modal}>
                            <div className={style.modalContent}>
                                <h1>Modal Title</h1>
                                <p>Conteúdo do modal. Lorem ipsum dolor sit amet...</p>
                                <button className="bg-orange-400 p-2 rounded hover:bg-orange-500" onClick={closeModal}>Fechar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default EasterEgg;