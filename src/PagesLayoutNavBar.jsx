import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./NavBarCSS.css"


export default function PagesLayoutNavBar(){
    return (
        <>
            <nav className="nav fixed">
                <Link className="homeLink navBarLinkAnimation" to="/" >SK</Link>
                <ul className="subNav">
                    <li ><Link className="navBarOptions navBarLinkAnimation" to="/About">About</Link></li>    
                    <li ><Link className="navBarOptions navBarLinkAnimation" to="/Projects">Projects</Link></li>
                    <li ><Link className="navBarOptions navBarLinkAnimation" to="/Contact">Contact</Link></li>

                </ul>
            </nav>
            
            <Outlet/>
        </>
    )


}