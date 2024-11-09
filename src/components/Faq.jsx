import { Icon } from '@iconify/react';

const Faq = ({ title, content, isActive, onToggle }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full h-full rounded-md border-2 border-stone-400 p-2 bg-slate-700">
                <h2 className="w-full">{title}</h2>
                <Icon
                    className={`cursor-pointer ${isActive ? 'translate-y-1 transition' : ''}`}
                    icon={isActive ? "mingcute:up-fill" : "mingcute:down-fill"}
                    onClick={onToggle}
                />
            </div>

            <div id='ans' className={`text-md p-2 mb-2 ${isActive ? "translate-y-1 transition" : ''}`}>
                {isActive && <p>{content}</p>}
            </div>
        </>
    );
};

export default Faq;
