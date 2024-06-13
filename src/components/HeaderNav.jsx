import React from "react";
import "../styles/HeaderNav.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderNav = ({showFlag, onClick}) => {


    return (
        <>
            <nav className={ showFlag ? 'header__nav active' : 'header__nav'}>
                <div className="header__navInner">
                    <ul className="header__navList">
                        <li><a href="">WORKS</a></li>
                        <li>
                            <Link to="profile" smooth={true} onClick={onClick} duration={500}><a href="">ABOUT</a></Link>
                        </li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                    <span className="header__close" onClick={onClick}>CLOSE</span>
                </div>
            </nav>
        </>
    )
}

export default HeaderNav 