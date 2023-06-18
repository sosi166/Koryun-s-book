import React, { useState } from 'react';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import "./Navbar.scss";

function Navbar() {
    const [click, setClick] = useState(false);
    const [nav, setNav] = useState(false);

    const handleClick = () => setClick(!click);

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNav(true)
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={nav ? "nav active" : "nav"} >
            <a href='#main' >Կորյուն Խաչկալյան</a>
            <ul className={click ? "menu menu-active" : "menu"}>
                <li><a href="#aboutBook" onClick={() => setClick(false)} >Գրքի մասին</a></li>
                <li><a href="#aboutAuthor" onClick={() => setClick(false)} >Հեղինակի մասին</a></li>
                <li><a href="#contact" onClick={() => setClick(false)} >Կապ մեզ հետ</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {
                    click ? <BiMenuAltRight /> : < BiMenu />
                }
            </div>
        </div>
    )
}
export default Navbar;