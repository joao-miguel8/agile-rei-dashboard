
import HomeIcon from "@/assets/icons/Home"
import PortfolioIcon from "@/assets/icons/Portfolio"
import HandyManIcon from "@/assets/icons/HandyMan"
import { useState } from "react"

const NavBar = () => {
const [sideMenuToggle, setSideMenuToggle] = useState(true)

return (
  <header className="fixed top-0 z-50 flex flex-col h-screen border border-transparent w-0 p" >
    <div className={` h-screen rounded-lg w-fit p-4	bg-gray-800 ${sideMenuToggle ? "-translate-x-full transition ease-out duration-300" : "translate-x-0 transition ease-out duration-300	" }`} >
      <a className=" mt-4 mb-10 w-full flex justify-center text-xl text-gray-200 " href="#" >L</a>
          <nav className=" flex flex-col gap-8 items-center text-gray-200" >
            <a href=""><HomeIcon/> </a>
            <a href="#"><PortfolioIcon/></a>
            <a href="#"><HandyManIcon/></a>
          </nav>
          
      <button className="absolute top-1/2 -right-10 py-2 pl-4 pr-1 bg-gray-800 rounded border"  onClick={() => setSideMenuToggle((prevState) => !prevState) } >
            <div >       
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` w-6 h-6 text-gray-200 transition-transform duration-500 ${ sideMenuToggle && "rotate-180" }`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </div>
      </button>
  </div>
</header>
)
}

export default NavBar