import { BsEmojiFrown } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";

const Herosection = () => {
    return (<>
        <div className="cursor-pointer fixed bottom-4 right-[2px] text-center flex items-center justify-center flex-col hover-container">
            <div className="flex items-center justify-center space-x-2">
                <FaHandPaper className="text-custom-yellow text-xl" />
                <h2 className="text-custom-gray font-semibold mb-0 text">We are here</h2>
            </div>

            <div className="h-12 w-12 bg-custom-yellow rounded-full flex items-center justify-center shadow-lg emoji-container">
                <BsEmojiFrown className="text-2xl text-custom-white" />
            </div>
        </div>


        <div className="bg-custom-lightblue">

            <div
                className="relative h-screen w-full sm:w-[90%] lg:w-[80%] mx-auto"
                style={{
                    backgroundImage: 'url(images/TrolleyBag2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col text-custom-white justify-end items-center h-full text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-4xl lg:text-3xl font-bold uppercase mb-2">
                        Because Every Heart Deserves
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-4xl max-w-3xl uppercase mb-4 font-bold">
                        Happiness
                    </p>
                    <p className="text-md font-semibold sm:text-lg lg:text-3xl max-w-3xl uppercase mb-8">
                        Choose HeartHacker Gifts
                    </p>
                </div>
            </div>

        </div>
    </>)
}
export default Herosection