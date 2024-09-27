import { useState } from "react";
import { useEffect } from "react";
import Label from "./Label";
import Rate from "./Rate";
import Time from "./Time";
import Compounding from "./Compounding";

const Calculator = ({ isCompound }) => {
    const [showResu, setShowRes] = useState(false);
    const [P, setP] = useState(0);
    const [T, setT] = useState(0);
    const [R, setSelectedRate] = useState(1);
    const [C, setC] = useState(0);

    useEffect(() => {
        setShowRes(false);
    }, [P, T, R, C]);

    const handlePChange = (numPrinciple) => {
        setP(numPrinciple);
    };
    const handleTChange = (time) => {
        setT(time);
    };
    const handleRateChange = (numRate) => {
        setSelectedRate(numRate);
    };
    const handleCChange = (numCompouding) => {
        setC(numCompouding);
    };

    function calcSimpleIntrest() {
        const intrest = (P * T * R) / 100;
        return intrest.toFixed(2);
    }

    function calcCompoundInterest() {
        const compoundAmount = P * Math.pow((1 + (R / (100 * C))), C * T);
        return (compoundAmount - P).toFixed(2);
    }

    const I = isCompound ? parseFloat(calcCompoundInterest()) : parseFloat(calcSimpleIntrest());

    function calcAmount() {
        const amount = isCompound ? P * Math.pow((1 + (R / (100 * C))), C * T) : P + I;
        return amount.toFixed(2)
    }
    const A = parseFloat(calcAmount());


    return (
        <>
            <div className="flex flex-col bg-[#1b1b1b] border-2 border-t-0 border-stone-400 mb-16">
                <div className="wrapper p-3">
                    <Label name="Principle" onPChange={handlePChange} />
                    <div className="flex mb-7">
                        <label className=" text-white" htmlFor="time">Time</label>
                        <div id="time" className="flex">
                            <Time onTChange={handleTChange} />
                        </div>
                    </div>
                    <Rate onRateChange={handleRateChange} />

                    {
                        isCompound && (<Compounding name="Compounding Time" onCChange={handleCChange} />
                        )
                    }

                </div>

                <button className="w-[100px] p-2 m-3 mb-5 border-2  border-stone-400 rounded-sm text-white bg-slate-700 hover:bg-[#131314]" onClick={() => setShowRes(true)}>Calculate</button>


                {showResu && <div className="text-center text-2xl">
                    <span className="p-2 text-white">Intrest = {I} </span>
                    <span className="p-2  text-white">Amount = {A} </span>

                </div>}

            {showResu && <p className=" text-white text-center text-2xl font-medium my-5 pt-6 border-t-2" >You need to pay {I} as Intrest and {A} as total amount.</p>}

            </div>

        </>
    )
}

export default Calculator;