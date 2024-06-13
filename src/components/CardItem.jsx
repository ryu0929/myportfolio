import React, {useState, useEffect, useRef} from "react";
import "../styles/CardItem.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardItem = ({src, title, role, onClick}) => {

    const [showModal, setShowModal] = useState(false);
    const ref = useRef();

     useEffect(() => {

        const elem = ref.current;
        console.log(elem);
        // const elems = Array.from(elem);
        console.log(elem);
        gsap.set(elem,{
            autoAlpha: 0,
            y: 10
        });

        const gsapAnim = () => {
            gsap.registerPlugin(ScrollTrigger);

                gsap.to(elem, {
                    duration: 1.5,
                    autoAlpha: 1,
                    y: 0,
                    ease: "power2.out",
                    stagger: 1,
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top center',
                        normalizeScroll: true,
                        ignoreMobileResize: true,
                        markers: true,
                    },
            });
        }

        setTimeout(() => {
            gsapAnim()
        }, 500);
     }, []);

    return (
        <>
            <li className="cardItem" onClick={onClick} ref={ref}>
                <div className="cardItem__image">
                    <div><img src={src} alt="" /></div>
                </div>
                <div className="cardItem__text">
                    <h3>{title}</h3>
                    <span>{role}</span>
                </div>
            </li>
        </>
    )
}

export default CardItem