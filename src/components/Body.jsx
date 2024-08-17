import Buttons from "./Buttons";
import Calculator from "./Calculator";
import Intro from "./Intro";

function Body() {
    return (
        <>
            <div className="h-screen">
                <Intro />

                <div className="calc-wrapper ml-auto mr-auto justify-center mt-10 w-1/2">
                    <div className="calc-header flex  bg-[rgb(27,27,27)] text-white">
                        <Buttons name="Simple Interest" />
                        <Buttons name="Compound Interest" />
                    </div>

                    <Calculator />



                </div>
            </div>
        </>
    )
}

export default Body;