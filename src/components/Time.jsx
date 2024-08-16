import { useState } from "react";

const Time = ({ duration }) => {
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    return (
        <div className="inline">
            <div>
                <input className="ml-2 rounded-md w-16 px-2" type="text" id={name} defaultValue={0} />
                <span className="text-white ml-2">{duration}</span>
            </div>
        </div>

    )
}

export default Time;
