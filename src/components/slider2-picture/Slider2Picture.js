import {motion} from "framer-motion";

function Slider2Picture({picture}) {
    return (
        <div>
            <motion.div className={'slider2-picture'}>
                <img src={picture} alt="views"/>
            </motion.div>
        </div>
    );

}

export {Slider2Picture}