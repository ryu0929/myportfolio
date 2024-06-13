import React from "react";
import { getModalContents } from "../hooks/getModalContents";
import "../styles/ModalContent.scss"

const ModalContent = ({modalId}) => {

    const modalContent = getModalContents(modalId);
    console.log(modalContent);

    return (
        <>
        { 0 < modalContent.length ? (
            <>
                <div className="worksModal__titleArea">
                    <h3>{modalContent[0].title}</h3>
                    <span>{modalContent[0].role}</span>
                </div>
                <div className="worksModal__picArea">
                    <div class="wrap">
                        <div class="img"><img src={modalContent[0].modalPic01} alt="" /></div>
                    </div>
                    <div class="wrap">
                        <div class="img"><img src={modalContent[0].modalPic02} alt="" /></div>
                    </div>
                </div>
                <div className="worksModal__explaArea">
                    <p>{modalContent[0].text}</p>
                </div>
            </>
        ) : (
            <></>
        )}
            
        </>
    )
}

export default ModalContent 