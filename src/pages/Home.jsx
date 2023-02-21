import React from 'react';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import News from '../components/News';
import Cocktails from '../components/Cocktails';
import Prestations from '../components/Prestations';
import Footer from '../components/Footer';
import '../style/page/_Home.scss';


const Home = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <div className='body'>
                <Presentation />
                <News />
                <Cocktails />
                <Prestations />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;