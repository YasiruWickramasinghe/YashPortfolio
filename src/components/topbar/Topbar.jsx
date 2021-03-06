import "./topbar.scss"
import {PhoneIphone,Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">PEARLIAN</a>
                    <div className="itemContainer">
                         <PhoneIphone className="icon" />
                         <span>+94 77 404 7401</span>
                    </div>
                    <div className="itemContainer">
                         <Mail className="icon" />
                         <span>Yash@pearlian.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>              
            </div>    
        </div>
    )
}
