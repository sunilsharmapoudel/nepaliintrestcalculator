const Header = () => {
  return (
    <>
      <header className="sticky top-0">
        <div className="header flex flex-row justify-between items-center bg-[#1b1b1b]	">
          <div className="brand flex items-center p-4">
            <img className="h-[2.5rem] pr-3" src="/images/nepali-intrest-calculator.png" alt="NepaliIntrest Calculator Logo" />
            <span className="text-2xl text-white font-medium">Nepali Intrest Calculator</span>
          </div>
          <div className="nav">
            <div className="nav-menu">
              <div className="nav-desktop font-normal text-white text-xl">
                <ul className="flex ">
                  <li className="mr-4">Home</li>
                  <li className="mr-4">About Us</li>
                  <li className="mr-4">Contact Us</li>
                  <li className="mr-4">Blogs</li>
                </ul>
              </div>
              <div className="nav-mob font-normal text-white text-xl">
                <ul className="flex flex-col items-center">
                  <li className="mr-4">Home</li>
                  <li className="mr-4">About Us</li>
                  <li className="mr-4">Contact Us</li>
                  <li className="mr-4">Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;