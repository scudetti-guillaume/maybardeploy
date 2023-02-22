import React from 'react';

import { Navigation, Pagination, Controller, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import cocktailcard from '../data/data-carte.js';

const CocktailsBlockRightV1 = () => {
    return (
        <div className='CB-block-right'>
            <div className="CB-block-right-cocktails">
                <div className="CB-block-right-cocktails-title">
                    <h1 className='CB-block-right-cocktails-title-span' >Nos Cocktails</h1>
                </div>
                <div className="CB-block-right-cocktails-card">
              
                    <Swiper className="CB-block-right-cocktails-card-swiper"
                        modules={[Navigation, Pagination, Controller, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    > {cocktailcard.map((cocktail, nom ) => (
                    <SwiperSlide className="CB-block-right-cocktails-card-slider"  key={nom}>
                            <div className="CB-block-right-cocktails-card-slider-main">
                            <p className='CB-block-right-cocktails-card-slider-p' >     
                                    {/* <span className='CB-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                    <span className='CB-block-right-cocktails-card-slider-nom'>{cocktail.nom}</span>
                                    
                                    <span className='CB-block-right-cocktails-card-slider-ingredients'>{cocktail.ingredients} </span> 
                                    <span className='CB-block-right-cocktails-card-slider-description'>{cocktail.description} </span> 
                                      
                            
                            </p>
                            <img className='CB-block-right-cocktails-card-slider-img' src={cocktail.image} alt={cocktail.nom} />
                            </div>
                    </SwiperSlide>
                       
                            ))}
                        
                    </Swiper>
                 
                
                </div>
            </div>
            <div className="CB-block-right-mocktails">
                <div className="CB-block-right-mocktails-title">
                    <h1 className='CB-block-right-mocktails-title-span' >Nos Mocktails</h1>
                </div>
                <div className="CB-block-right-mocktails-card"></div>
            </div>
        </div>
    );
};

export default CocktailsBlockRightV1;