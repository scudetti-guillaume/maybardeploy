import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import ContactMod from './Contact-comp';
import '../style/components/_Navigation.scss'


const Navigation = ({ scrollToComponent }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='Nav-main'>
            <NavLink className="NavLink-block-logo" to="/" >
                <div className='Nav-block-logo'>
                    <img className='Nav-logo-icon' src='./icons/maybar-header-logo.png' alt='maybar logo'></img>
                    <img className='Nav-logo-name' src='./icons/maybarBc.png' alt='maybar logo'></img>
                    {/* <div className='Nav-Maybar'>Maybar</div> */}
                </div>
            </NavLink>
            <ul className='Nav-ul' >
                <NavLink to="/" >
                    <li className='Footer-li' >
                        <div className='Footer-news'>News</div>
                    </li>
                </NavLink>
                
                <NavLink to="/" >
                    <li className='Footer-li' >
                        <div className='Footer-menu'>Carte</div>
                    </li>
                </NavLink>
             
                <NavLink to="/" >
                    <li className='Footer-li' >
                        <div className='Footer-presta'>Prestations</div>
                    </li>

                </NavLink>
                {/* <NavLink to="/contact" >
                    <li className='Nav-li' onClick={() => setModalIsOpen(true)}>
                        <div className='Nav-contact'>Contact</div>
                    </li >
                </NavLink> */}      
                <div className="Nav-li" onClick={() => setModalIsOpen(true)} >Contact</div>
                <Modal className='Modale-Contact' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}   >
                    <ContactMod closeModal={() => setModalIsOpen(false)} />
                </Modal>

                    
                <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank'>
                    <li className='.Nav-li-icon'>
                        <div className='Nav-div-social-fb'><img className='Nav-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                    </li>
                </NavLink>
                <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank' >
                    <li className='.Nav-li-icon' >
                        <div className='Nav-div-social-instagram'><img className='Nav-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                    </li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;