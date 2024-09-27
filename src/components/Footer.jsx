const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper flex justify-around items-center bg-[#1b1b1b] ">
                    <div className="footer-brand flex items-center p-4">
                        <img className="max-sm:h-[2rem] h-[2.5rem] pr-3" src="/images/nepali-intrest-calculator.png" alt="NepaliIntrest Calculator Logo" />
                        <span className="lg:text-3xl max-sm:text-lg text-2xl text-white font-medium">Nepali Intrest Calculator</span>
                    </div>
                    <div className="max-sm:text-lg text-center foooter-nav font-normal text-white text-xl">
                        <ul className="flex ">
                            <li className="mr-4">FAQ</li>
                            <li className="mr-4">Terms of Use</li>
                            <li className="mr-4">Developer</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;