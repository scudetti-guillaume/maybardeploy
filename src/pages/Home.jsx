import React from 'react';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import News from '../components/News';
import Cocktails from '../components/Cocktails-Main';
import Prestations from '../components/Prestations';
import Footer from '../components/Footer';
import '../style/page/_Home.scss';






const Home = () => {

    function scrollToComponent(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }



    //* button to scroll to top

    // const [isVisible, setIsVisible] = useState(false);

    // const toggleVisibility = () => {
    //     if (window.pageYOffset > 300) {
    //         setIsVisible(true);
    //     } else {
    //         setIsVisible(false);
    //     }
    // };

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", toggleVisibility);
    //     return () => {
    //         window.removeEventListener("scroll", toggleVisibility);
    //     };
    // }, []);

    //**end button scroll to top  */

    return (
        <div>


            <header>
                <Navigation scrollToComponent={scrollToComponent} />
            </header>
            <div className='body'>
                {/* {isVisible && (

                    <button className={`scrollToTop ${isVisible ? 'show' : ''}`} onClick={scrollToTop}><i className="icon-scroll-to-top fa fa-chevron-up"></i></button>
                )} */}
                <Presentation />

                <News />

                <Cocktails />

                <Prestations />

            </div>
            <footer>
                <Footer scrollToComponent={scrollToComponent} />
            </footer>
        </div>
    );
};

export default Home;