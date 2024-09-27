import { useState } from "react";
import Buttons from "../components/Buttons";
import Calculator from "../components/Calculator";
import Intro from "../components/Intro";
import Faq from "../components/Faq";
import faqs from "../data/faq";

function HomePage() {
    const [compoundBtn, setCompoundbtn] = useState(false);
    const [activeFaq, setactiveFaq] = useState(null);

    const toggleFaq = ((id) => {
        setactiveFaq(activeFaq === id ? null : id);
    });

    return (
        <>
            <div className="h-full mb-16">
                <Intro />
                <div className="calc-wrapper ml-auto mr-auto justify-center mt-10 w-1/2">
                    <div className="calc-header flex bg-[rgb(27,27,27)] text-white">
                        <Buttons name="Simple Interest" onClick={() => setCompoundbtn(false)} />
                        <Buttons name="Compound Interest" isCompound={compoundBtn} onClick={() => setCompoundbtn(true)} />
                    </div>
                    <Calculator isCompound={compoundBtn} />
                </div>
                <div className='flex flex-col text-white ml-auto mr-auto w-2/4'>
                    <span className="max-sm:text-2xl max-md:text-3xl text-4xl font-medium mb-5 border-b-2">FAQs</span>
                    {
                        faqs.map((faq) => (
                            <Faq
                                key={faq.id}
                                title={faq.title}
                                content={faq.content}
                                isActive={activeFaq === faq.id}
                                onToggle={() => toggleFaq(faq.id)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage;
