import { useEffect, useState } from "react"

const Label = ({ name, onPChange }) => {
    let [principle, setPrinciple] = useState(0);

    const changetoNum = (value) => {
        const num = parseInt(value, 10)
        return isNaN(num) ? 0 : num;
    }

    principle = changetoNum(principle);

    useEffect(() => {
        onPChange(principle);
    }, [onPChange, principle])

    return (<div className="mb-7">
        <label className=" text-white" htmlFor={name}>{name}</label>
        <input autoComplete="true" className="ml-2 rounded-md w-28 px-2" type="text" id={name} value={principle} onChange={(e) => { setPrinciple(e.target.value) }} />
    </div>
    )
}

export default Label
