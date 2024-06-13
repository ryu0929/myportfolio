import React, {useEffect, useRef} from "react";
import Title from './Title';
import "../styles/Section.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTemplate = ({classNameA, classNameB, text, children}) => {

    const ref = useRef();
    const ins = useRef();
    const trig = useRef();
   
    useEffect(() => {

        console.log(ins);
        gsap.registerPlugin(ScrollTrigger);

        // const target = document.getElementsByClassName('title__text');
        // const targets = Array.from(target);
        
        // targets.forEach((elem) => {
        //     gsap.set(elem, {
        //         x: '-100',
        //     });
        //     gsap.to(elem, {
        //         x: '0',
        //         duration: 1.2,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: '.section',
        //             start: 'top center+=40%',
        //             markers: true,
        //         }
        //     });
        // });

        // const element = ins.current;
        // const element1 = ref.current;
        // const trigger = trig.current;
        // console.log(element);
        // console.log(element1);
        // console.log(trigger);
        // gsap.set(ins.current, {
        //     x: '-100',
        // });
        // gsap.to(ins.current, {
        //     x: '0',
        //     duration: 1.2,
        //     ease: "power2.out",
        //     scrollTrigger: {
        //         trigger: trigger,
        //         start: 'top center+=40%',
        //         markers: true,
        //     }
        // });
    }, []);

    return (
        <>
            <div className={classNameA} ref={ref}>
                <div className="section__inner" ref={trig}>
                    <div className="section__title">
                        <Title className={classNameB} text={text} ref={ins}/>
                    </div>
                    <div className="section__content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTemplate