//Importing Components
import Nav from "./Nav"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
        <div>
            <div className="hidden md:flex">
                <Nav />
            </div>
            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    )
}

export default Header