import React from 'react';
import "../style/page/_Block-twitter.scss";

const Blocktwitter = () => {
    return (
        <div className='News-block-twitter-main'>
        <div className='News-block-twitter-title'>
        Les News
        </div>
            <p className='News-block-twitter-p'>
                <h2 className='News-block-twitter-h2'> Nouvelle carte avec nouveau logo</h2>
                <span className='News-block-twitter-span'>
                    Nouvelle carte avec nouveau logo créé par Monsieur @artofromainguyot !!!
                    <br />
                    Gros talent et vraiment au top. Le pauvre je lui ai fait modifier le logo tellement de fois mais j'adore le final !!! 
                    <br />
                    Merci encore pour tout ! </span>
                    <p>lien vers le post souhait bonne année fete soirée.. </p>
            </p>
        </div>
    );
};

export default Blocktwitter;