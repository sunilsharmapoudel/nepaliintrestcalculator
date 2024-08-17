import { useEffect, useState } from "react";
const Rate = ({ onRateChange }) => {
    const [rate, setRate] = useState(1);
    const numRate = parseFloat(rate);

    useEffect(() => {
        onRateChange(numRate);
    }, [numRate, onRateChange]);

    return (
        <div>
            <label className="text-white" htmlFor="rate">Rate</label>
            <select className="ml-2 rounded-md" name="" id="rate" value={rate} onChange={(e) => {
                setRate((e.target.value))
            }}>
                <option defaultValue={1} value={1}>{1} Rupee</option>
                <option value={1.5}>1.5 Rupee</option>
                <option value={2}>2 Rupee</option>
                <option value={2.5}>2.5 Rupee</option>
                <option value={3}>3 Rupee</option>
            </select>
        </div>
    )

}

export default Rate;
