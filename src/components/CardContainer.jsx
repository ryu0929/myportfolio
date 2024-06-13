import React, {useState} from "react";
import CardItem from './CardItem';
import WorksModal from './WorksModal';
import contentData from '../data/contentData';
import "../styles/CardContainer.scss"



const CardContainer = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalSelect, setModalSelect] = useState("");//モーダルの中身の振り分け

    const openModal = (target) => {
        setShowModal(true);
        setModalSelect(target);
        // currentProduct: i
    }

    const closeModal = () => {
        setShowModal(false);
        setModalSelect(null);
    }

    console.log(showModal);

    const ListItems = contentData.map((data, index) => {
        return (
            <CardItem {...data} key={index} onClick={() => openModal(`modal-${index+1}`)}/>
        )
    })

    // const ModalItems = contentData.map((data, index) => {
    //     return (
    //         <Modal showFlag={showModal} {...data} key={index}/>
    //     )
    // });
    
    return (
        <section className="cardContainer">
            <div className="cardContainer__inner">
                <ul className="cardContainer__list">
                    {ListItems}
                </ul>
            </div>
           {/* {ModalItems} */}
           <WorksModal showFlag={showModal} modalContent={modalSelect} onClick={closeModal}/>
        </section>
    )
}

export default CardContainer