import React from 'react';
import '../style/components/_Navigation.scss'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='Nav-main'>
            <NavLink className="NavLink-block-logo"  to="/" >
                <div className='Nav-block-logo'>
                    <img className='Nav-logo-icon' src='./icons/maybar-header-logo.png' alt='maybar logo'></img>
                    <img className='Nav-logo-name' src='./icons/maybarBc.png' alt='maybar logo'></img>
                    {/* <div className='Nav-Maybar'>Maybar</div> */}
                </div>
            </NavLink>
            <ul className='Nav-ul' >
                <li className='Nav-li'>
                    <div className='Nav-news'>News</div>
                </li>
                <li className='Nav-li'>
                    <div className='Nav-menu'>Carte</div>
                </li>
                <li className='Nav-li'>
                    <div className='Nav-presta'>Prestations</div>
                </li>
                <li className='Nav-li'>
                    <div className='Nav-contact'>Contact</div>
                </li >
                <NavLink to="#" >
                    <li className='.Nav-li-icon'>
                        <div className='Nav-div-social-fb'><img className='Nav-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                    </li>
                </NavLink>
                <NavLink to="#" >
                    <li className='.Nav-li-icon' >
                        <div className='Nav-div-social-instagram'><img className='Nav-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                    </li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;