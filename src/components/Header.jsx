import React from 'react'
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
    return (
        <nav>
            <h1>VJ-solution</h1>
            <main>
         <HashLink to={"/#home"}>home</HashLink>
         <HashLink to={"/contact"}>contact</HashLink>
         <HashLink to={"/#about"}>about</HashLink>
         <HashLink to={"/#Brands"}>Brands</HashLink>
         <HashLink to={"/services"}>services</HashLink>
         {/* <Link to={"/"}></Link> */}
            </main>
        </nav>
    )
}

export default Header