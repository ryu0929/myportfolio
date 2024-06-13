import React, {useState} from "react";
import "../styles/Header.scss"
import HeaderNav from './HeaderNav';

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(showModal ? false : true);
        document.getElementsByClassName('header__navToggle')[0].classList.toggle('active');
    }

    const closeModal = () => {
        setShowModal(false);
        document.getElementsByClassName('header__navToggle')[0].classList.remove('active');
    }

    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <h1 className="header__logo">
                        <span><img src="./assets/images/ryuichirookie.svg" alt="" /></span>
                        <span><img src="./assets/images/portfoliosite.svg" alt="" /></span>
                    </h1>
                    <div className="header__navToggle" onClick={() => openModal()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <HeaderNav showFlag={showModal} onClick={closeModal}/>
                </div>
            </header>
        </>
    )
}

export default Header