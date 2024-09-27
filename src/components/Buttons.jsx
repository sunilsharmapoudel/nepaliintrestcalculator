const Buttons = ({ name, onClick }) => {
    return (
        <div className="flex-1"><button onClick={onClick}  className="p-2 border-2 border-t-0 border-r-0 border-stone-400 rounded-md w-full h-full bg-slate-700 hover:bg-[#131314]">{name}</button></div>
    )
}

export default Buttons