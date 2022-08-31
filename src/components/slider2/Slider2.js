import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import {Slider2Picture} from "../slider2-picture/Slider2Picture";
import {pictures} from "../../pictures/pictures";

import './slider2-styles.css';

function Slider2() {

    const [width, setWidth] = useState(0);

    const slider = useRef();

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []);

    return (
        <div className={'slider_wrapper'}>
            <div className={'home-link'}><Link to={'/'}>go back to menu</Link></div>
            <motion.div ref={slider} whileTap={{cursor: 'grabbing'}} className={'slider2'}>
                <h1>Grab it ;)</h1>
                <motion.div drag={'x'} dragConstraints={{right: 0, left: -width}} className={'slider2-inner'}>
                    {
                        pictures.map(picture => <Slider2Picture key={picture} picture={picture}/>)
                    }
                </motion.div>
            </motion.div>
        </div>
    );

}

export {Slider2};