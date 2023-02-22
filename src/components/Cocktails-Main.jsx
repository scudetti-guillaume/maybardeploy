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
                <span className="Cocktail-footer-span">
                    Vous n'avez pas trouvez votre bonheur n'hésitez pas
                    à nous envoyez vos idées ou créations.
                </span>
                <div className="Cocktail-footer-logo">

                    <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                        <div className="Cocktail-footer-logo-facebook"><img className='Cocktail-footer-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                    </NavLink>
                    <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                        <div className='Cocktail-footer-logo-insta'><img className='Cocktail-footer-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Cocktails;