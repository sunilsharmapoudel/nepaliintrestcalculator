import { useEffect, useState } from "react";

const Time = ({ onTChange }) => {

    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [error, setError] = useState("");
    const [errorTimeout, setErrorTimeout] = useState(null);

    const handleInputChange = (setter, value) => {
        const regx = /^[0-9]*\.?[0-9]*$/;
        if (regx.test(value)) {
            setter(value);
            setError("");
        } else {
            setError("Please enter a valid number");
            const timeout = setTimeout(() => {
                setError("");
            }, 2000);
            setErrorTimeout(timeout);
        }
    }

    const changetoNum = (value) => {
        const num = parseInt(value, 10);
        return isNaN(num) ? 0 : num;
    }

    const time = (changetoNum(years * 12) + changetoNum(months) + changetoNum(days) / 30);

    useEffect(() => {
        onTChange(time);
    }, [onTChange, time]);

    return (
        <div className="">
            <div>
                <input
                    className="ml-2 rounded-md w-16 px-2"
                    type="text"
                    placeholder="0"
                    value={years}
                    onChange={(e) => handleInputChange(setYears, e.target.value)}
                />
                <span className="text-white ml-2">Years</span>

                <input
                    className="max-sm:my-2 ml-2 rounded-md w-16 px-2"
                    type="text"
                    placeholder="0"
                    value={months}
                    onChange={(e) => handleInputChange(setMonths, e.target.value)}
                />
                <span className="text-white ml-2">Months</span>

                <input
                    className="ml-2 sm:my-2 rounded-md w-16 px-2"
                    type="text"
                    placeholder="0"
                    value={days}
                    onChange={(e) => handleInputChange(setDays, e.target.value)}
                />
                <span className="text-white ml-2">Days</span>
            </div>
            {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
        </div>
    );
}

export default Time;
