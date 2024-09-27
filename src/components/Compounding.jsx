import { useEffect, useState } from "react"

const Compounding = ({ name, onCChange }) => {
    const [compounding, setCompounding] = useState(0)
    const [error, setError] = useState("");
    const [errorTimeout, setErrorTimeout] = useState(null);

    const handleInputChange = (value) => {
        const regx = /^[0-9]*\.?[0-9]*$/;
        if (regx.test(value)) {
            setCompounding(value);
            setError("");
        } else {
            setError("Please enter a valid principle");
            const timeout = setTimeout(() => {
                setError("");
            }, 2000);
            setErrorTimeout(timeout);
        }
    }

    

    const changetoNum = (value) => {
        const num = parseInt(value, 10)
        return isNaN(num) ? 0 : num;
    }

    const numCompouding = changetoNum(compounding);

    useEffect(() => {
        onCChange(numCompouding);
    }, [onCChange, numCompouding])

    return (<div className="mt-7">
        <div>
            <label className=" text-white" htmlFor={name}>{name}</label>
            <input autoComplete="true" className="ml-2 rounded-md w-28 px-2" type="text" id={name} value={compounding} onChange={(e) => { handleInputChange(e.target.value) }} />
            <span className=" text-white ml-2">In years</span>
        </div>
        {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
    </div>
    )
}

export default Compounding
