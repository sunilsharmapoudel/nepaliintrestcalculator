import { useEffect, useState } from "react"

const Label = ({ name, onPChange }) => {
    const [principle, setPrinciple] = useState(0);
    const [error, setError] = useState("");
    const [errorTimeout, setErrorTimeout] = useState(null);


    const handleInputChange = (value) => {
        const regx = /^[0-9]*\.?[0-9]*$/;
        if (regx.test(value)) {
            setPrinciple(value);
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
        const num = parseFloat(value, 10)
        return isNaN(num) ? 0 : num;
    }

    const numPrinciple = changetoNum(principle);

    useEffect(() => {
        onPChange(numPrinciple);
    }, [onPChange, numPrinciple])

    return (<div className="mb-7">
        <label className=" text-white" htmlFor={name}>{name}</label>
        <input autoComplete="true" className="ml-2 rounded-md w-28 px-2" type="text" placeholder="0" id={name} value={principle} onChange={(e) => { handleInputChange(e.target.value) }} />
        {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
    </div>
    )
}

export default Label
