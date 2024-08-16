import { useState } from "react";
const Rate = () => {
    const [rate, setRate] = useState(0);
    const handle = (e) => {
        setRate(parseInt(e.target.value));
        console.log(typeof (rate));
        console.log(rate)
    }
    return (
        <div>
            <label className="text-white" htmlFor="rate">Rate</label>
            <select className="ml-2 rounded-md" name="" id="rate" value={rate} onChange={handle}>
                <option defaultValue={1} value={1}>{1.0} Rupee</option>
                <option value={1.5}>1.5 Rupee</option>
                <option value={2}>2 Rupee</option>
                <option value={2.5}>2.5 Rupee</option>
                <option value={3}>3 Rupee</option>
            </select>
        </div>
    )
}

export default Rate;
