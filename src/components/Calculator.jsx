import Label from "./Label";
import Rate from "./Rate";
import Time from "./Time";

const Calculator = () => {
    

    return (
        <>
            <div className="flex flex-col bg-[#1b1b1b] border-2 border-t-0 border-stone-400">
                <div className="wrapper p-3">
                    <Label name="Principle" />
                    <div className="flex mb-7">
                        <label className=" text-white" htmlFor="time">Time</label>
                        <div id="time" className="flex">
                            <Time duration="Years" />
                            <Time duration="Months" />
                            <Time duration="Days" />
                        </div>
                    </div>
                    <Rate />
                </div>
                <button className="w-[100px] p-2 m-3 border-2  border-stone-400 rounded-sm text-white bg-slate-700 hover:bg-[#131314]" onClick={() => { }}>Calculate</button>
            </div>
        </>
    )
}

export default Calculator;