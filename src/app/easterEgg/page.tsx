import { Card } from "@/components/card";

const easterEgg = () => {
    const style = {
        container: "flex flex-wrap flex-col m-4 gap-3",
        content: "flex flex-start flex-col text-white h-auto w-1/4 bg-cyan-900 rounded p-4 absolute left-0",
        content2: "flex flex-end flex-col text-white h-auto w-1/4 bg-cyan-900 rounded p-4 absolute right-0",
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
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
                        <div className={style.content}>
                            <h1 className="text-center mt-4">Card 4</h1>
                            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium dolorum mollitia eveniet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default easterEgg;
