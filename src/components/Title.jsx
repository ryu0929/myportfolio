import React, {useEffect, useRef, forwardRef} from "react";
import "../styles/Title.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Title = ({className, text}) => {

    const ref = useRef();
    
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const element1 = ref.current;
        
       
        console.log(element1);
        
        gsap.set(ref.current, {
            x: '-100',
        });
        gsap.to(ref.current, {
            x: '0',
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element1,
                start: 'top center+=40%',
                markers: true,
            }
        });

    }, []);

    return (
        <>
           <h2 className={className} ref={ref}>
                <div className="title__inner">
                    <span className="title__text">{text}</span>
                </div>
            </h2>
        </>
    )
}

    


export default Title