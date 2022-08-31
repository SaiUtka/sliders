import {Link} from "react-router-dom";

import './menu-styles.css';

function Menu() {
    return (
        <div className={'menu'}>
            <ul className={'menu_list'}>
                <li className={'list_item'}>
                    <Link to="/arrows-slider">Slider with 'arrows' ({'< >'})</Link>
                </li>

                <li className={'list_item'}>
                    <Link to="/grabbing-slider">'Grabbing' slider</Link>
                </li>

                <li className={'list_item'}>
                    <Link to=""> </Link>
                </li>

            </ul>

        </div>
    );

}

export {Menu}