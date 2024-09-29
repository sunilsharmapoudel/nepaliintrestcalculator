import { NavLink } from "react-router-dom";

const Header = () => {
  function animate() {
    document.querySelector('.ham-bar1').classList.toggle('animate');
    document.querySelector('.ham-bar2').classList.toggle('animate');
    document.querySelector('.ham-bar3').classList.toggle('animate');
    document.getElementById("mob-drawer").classList.toggle("hide-drawer");
  }
  return (
    <>
      <header className="sticky top-0">
        <div className="header flex flex-row justify-between items-center bg-[#1b1b1b]	">
          <div className="max-sm:text-xl text-2xl text-white font-medium brand flex items-center p-4">
            <NavLink to={"/"}><img className="max-sm:h-[2.2rem] h-[2.5rem] pr-3" src="/images/nepali-intrest-calculator.png" alt="Nepali Intrest Calculator Logo" /></NavLink>
            <NavLink to={"/"}><span className="lg:text-3xl">Nepali Intrest Calculator</span></NavLink>
          </div>
          <div className="max-md:hidden  nav">
            <div className="nav-menu">
              <div className="nav-desktop font-normal text-white text-xl">
                <ul className="flex ">
                  <NavLink to={"/"}><li className="mr-4">Home</li></NavLink>
                  <NavLink to={"/about"}><li className="mr-4">About Us</li></NavLink>
                  <NavLink to={"/contact"}><li className="mr-4">Contact Us</li></NavLink>
                  <NavLink to={"/blogs"}><li className="mr-4">Blogs</li></NavLink>
                </ul>
              </div>
            </div>
          </div>

          {
            <div className="md:hidden max-sm:text-start ham text-white text-4xl mr-4" onClick={animate}>
              <div className="ham-bar1"></div>
              <div className="ham-bar2"></div>
              <div className="ham-bar3"></div>
            </div>
          }

        </div>
        <div id="mob-drawer" className="md:hidden hide-drawer">
          <div className="flex fixed items-center  h-full w-full bg-slate-900">
            <div className="nav-mob font-normal text-white text-xl">
              <ul className="flex flex-col items-center">
                <NavLink to={"/"}><li className="mb-5">Home</li></NavLink>
                <NavLink to={"/about"}><li className="mb-5">About Us</li></NavLink>
                <NavLink to={"/contact"}><li className="mb-5">Contact Us</li></NavLink>
                <NavLink to={"/blogs"}><li className="mb-5">Blogs</li></NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;