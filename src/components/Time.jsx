import { useEffect, useState } from "react";

const Time = ({ onTChange }) => {

    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);



    const changetoNum = (value) => {
        const num = parseInt(value, 10)
        return isNaN(num) ? 0 : num;
    }
    const time = (changetoNum(years * 12) + changetoNum(months) + changetoNum(days) / 30);

    useEffect(() => {
        onTChange(time)
    }, [onTChange, time])
    return (
        <div className="">
            <input className="ml-2 rounded-md w-16 px-2" type="text" defaultValue={0} onChange={(e) => setYears(e.target.value)} />
            <span className="text-white ml-2">Years</span>
            <input className="ml-2 rounded-md w-16 px-2" type="text" defaultValue={0} onChange={(e) => setMonths(e.target.value)} />
            <span className="text-white ml-2">Months</span>
            <input className="ml-2 rounded-md w-16 px-2" type="text" defaultValue={0} onChange={(e) => setDays(e.target.value)} />
            <span className="text-white ml-2">Days</span>
        </div>

    )
}

export default Time;
