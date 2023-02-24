import React from 'react';
import CocktailsBlockLeft from './Cocktails-Block-Left';
import CocktailsBlockRightV1 from './Cocktails-Block-RightV1';
import { NavLink } from 'react-router-dom';

const Cocktails = () => {
    return (
        <div className='Cocktail-main'>
            <div className="Cocktail-titre">
                <h1>Nos Cocktails / Mocktails</h1>
            </div>
            <div className="Cocktail-container">
                <CocktailsBlockLeft />
                <CocktailsBlockRightV1 />
            </div>
            <div className="Cocktail-footer">


                <div className="Cocktail-footer-navlink-btn">

                    <NavLink className="Cocktail-footer-navlink-tocarte" target='_blank' to='/carte'>
                        <button className="Cocktail-footer-navlink-btn-tocarte">
                            <span>Découvrez notre carte complete MAYBAR</span>
                        </button>
                    </NavLink>
                    <NavLink className="Cocktail-footer-navlink-dlpdf" target='_blank' to='https://cdn.website.dish.co/media/8c/16/4748575/COCKTAILS-MOCKTAILS.pdf'>
                        <button className="Cocktail-footer-navlink-btn-dlpdf">
                            <span>Télecharger la version PDF de notre carte</span>
                            <img className='Cocktail-footer-navlink-btn-dlpdf-icon' src="" alt='pdf icon' />
                        </button>
                    </NavLink>
                </div>

                <div className="Cocktail-footer-navlink-block">
                    <span className="Cocktail-footer-navlink-span">
                        Vous n'avez pas trouvez votre bonheur n'hésitez pas
                        à nous envoyez vos idées ou créations.
                    </span>

                    <div className="Cocktail-footer-navlink-logo">

                        <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                            <div className="Cocktail-footer-logo-facebook"><img className='Cocktail-footer-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                            <div className='Cocktail-footer-logo-insta'><img className='Cocktail-footer-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cocktails;