const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper flex justify-around items-center bg-[#1b1b1b] ">
                    <div className="footer-brand flex p-4">
                        <img className="h-[2.5rem] pr-3" src="/images/nepali-intrest-calculator.png" alt="NepaliIntrest Calculator Logo" />
                        <span className="text-3xl text-white font-medium">Nepali Intrest Calculator</span>
                    </div>
                    <div className="foooter-nav font-normal text-white text-xl">
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