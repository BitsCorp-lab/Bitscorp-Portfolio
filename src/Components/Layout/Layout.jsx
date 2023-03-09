import Navbar from "../Navbar/Navbar"
import "./Layout.css"

const Layout = ({children, handleNavEle}) => {  
    return(
        <div className="layoutCon">
            <div className="navbarCon">
                <Navbar handleNavEle={handleNavEle}/>
            </div>
            <div className="contentCon">
                {children}
            </div>
        </div>
    )
}

export default Layout