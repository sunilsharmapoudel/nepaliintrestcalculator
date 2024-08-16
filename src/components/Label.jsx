import { useState } from "react"

const Label = ({ name }) => {
    const [priniple, setPrinciple] = useState(0);
    return (<div className="mb-7">
        <label className=" text-white" htmlFor={name}>{name}</label>
        <input autoComplete="true" className="ml-2 rounded-md w-28 px-2" type="text" id={name} value={priniple} onChange={(e) => { setPrinciple(e.target.value) }} />
    </div>
    )
}

export default Label
