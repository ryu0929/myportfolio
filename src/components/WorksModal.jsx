import React from "react";
import contentData from '../data/contentData';
import ModalContent from './ModalContent';
import "../styles/WorksModal.scss"

const WorksModal = ({showFlag, modalContent, onClick}) => {


    return (
        <>
            <div className={ showFlag ? 'worksModal active' : 'worksModal'}>
                <div className="worksModal__layer" onClick={onClick}></div>
                <div className="worksModal__inner">
                    <ModalContent modalId={modalContent}/>
                    <span className="worksModal__close" onClick={onClick}>CLOSE</span>
                </div>
                <div className="worksModal__closeBtn" onClick={onClick}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
        // <>
        //     {showFlag ? (
        //         <div className="modal">
        //             <div className="modal__layer" onClick={onClick}></div>
        //             <div className="modal__inner">
        //                 <ModalContent modalId={modalContent}/>
        //                 <span className="modal__close" onClick={onClick}>CLOSE</span>
        //             </div>
        //             <div className="modal__closeBtn" onClick={onClick}>
        //                 <span></span>
        //                 <span></span>
        //             </div>
        //         </div>
        //     ) : (
        //         <></>
        //     )}
        // </>
    )
}

export default WorksModal 