import {useState} from "react";
import {Link} from "react-router-dom";

import {Slider1Picture} from "../slider1-picture/Slider1Picture";
import {pictures} from "../../pictures/pictures";

import './slider1-styles.css';

function Slider1() {

    const [translateX, setTranslateX] = useState(0);

    const handleLeftArrowClick = () => {
        setTranslateX(translateX + 840);
    }

    const handleRightArrowClick = () => {
        setTranslateX(translateX - 840);
    }

    return (
        <div className={'slider_wrapper'}>
            <div className={'home-link'}><Link to={'/'}>go back to menu</Link></div>
            <div className={'slider1'}>
                <button disabled={translateX >= 0} onClick={handleLeftArrowClick} className="arrow">&#10096;</button>
                <div className={'slider-container'}>
                    <div className={'slider1-inner'} style={{transform: `translateX(${translateX}px)`}}>
                        {
                            pictures.map(picture => <Slider1Picture key={picture} picture={picture}/>)
                        }
                    </div>
                </div>
                <button disabled={translateX <= -((pictures.length - 2) * 840 / 2)} onClick={handleRightArrowClick}
                        className="arrow">&#10097;</button>
            </div>
        </div>
    );

}

export {Slider1};