import { Icon } from '@iconify/react';

const Faq = ({ title, content, isActive, onToggle }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full h-full border-2 border-stone-400 rounded-md p-2 bg-slate-700 text-lg">
                <h2 className="inline-block">{title}</h2>
                <Icon
                    className={`mr-2 ${isActive ? 'translate-y-1 transition' : ''}`}
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
