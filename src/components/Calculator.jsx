import { useState } from "react";
import Label from "./Label";
import Rate from "./Rate";
import Time from "./Time";

const Calculator = () => {
    const [showResu, setShowRes] = useState(false);
    const [P, setP] = useState(0);
    const [T, setT] = useState(0);
    const [R, setSelectedRate] = useState(1);

    const handlePChange = (principle) => {
        setP(principle);
    };
    const handleTChange = (time) => {
        setT(time);
    };
    const handleRateChange = (numRate) => {
        setSelectedRate(numRate);
    };

    function calcIntrest() {
        const intrest = (P * T * R) / 100;
        return intrest;
    }

    const I = calcIntrest();

    function calcAmount() {
        const amount = P + I;
        return amount
    }
    const A = calcAmount();


    // const intrest = (P * T * R) / 100;
    // const amount = P + intrest;

    return (
        <>
            <div className="flex flex-col bg-[#1b1b1b] border-2 border-t-0 border-stone-400">
                <div className="wrapper p-3">
                    <Label name="Principle" onPChange={handlePChange} />
                    <div className="flex mb-7">
                        <label className=" text-white" htmlFor="time">Time</label>
                        <div id="time" className="flex">
                            <Time onTChange={handleTChange} />
                        </div>
                    </div>
                    <Rate onRateChange={handleRateChange} />
                </div>
                


                <button className="w-[100px] p-2 m-3 border-2  border-stone-400 rounded-sm text-white bg-slate-700 hover:bg-[#131314]" onClick={() => setShowRes(true   )}>Calculate</button>

                {showResu && <div className="text-center text-2xl">
                    <span className="p-2 text-white">Intrest = {I} </span>
                    <span className="p-2  text-white">Amount = {A} </span>

                </div>}

            </div>

            {showResu && <p className=" text-white text-center text-2xl font-medium my-5" >You need to pay {I} as Intrest and {A} as total amount.</p>}
        </>
    )
}

export default Calculator;