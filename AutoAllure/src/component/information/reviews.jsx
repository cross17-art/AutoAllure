import { useState,useEffect } from 'react'
import styleReviews from '../../assets/css/reviews.module.scss'
// import FAQS from './faqs'
// import AboutUs from './aboutUs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function Reviews({url}) {
  
    return(
     <section>
        <div className={styleReviews.reviews}>
            <div className={styleReviews['reviews__block']}>
                <video autoPlay={true} loop={true} muted={true} className={styleReviews['reviews__block--video']}>
                    <source src="/clients/preview.mp4" type="video/mp4" />
                </video>
            </div>
            
            <div className={styleReviews.reviews__clients}>
                
                <Swiper 
                        navigation={true}
                        centeredSlides={true}
                        modules={[Navigation]}
                        className={styleReviews['reviews__clients--custom'] }
                    >
                                <SwiperSlide>
                                    <div className={styleReviews['reviews__clients--swiper']}>
                                        <div className={styleReviews['client__img']}>
                                            <img src='/clients/mr.jpg'></img>
                                        </div>
                                        <h1>Maria Novikova</h1>
                                        <p>“Due to the cancellation of the plane, we had to quickly look for a car to another airport, a simple taxi did not fit, we turned to the Autoallure, were pleasantly surprised by the quick delivery and the trip itself!”</p>
                                    </div>
                                    
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className={styleReviews['reviews__clients--swiper']}>
                                    <div className={styleReviews['client__img']}>
                                        <img src='/clients/dm.jpg'></img>
                                    </div>
                                    <h1>Maxim Dolgov</h1>
                                    <p>“Due to the cancellation of the plane, we had to quickly look for a car to another airport, a simple taxi did not fit, we turned to the Autoallure, were pleasantly surprised by the quick delivery and the trip itself!”</p>
                                </div>
                                
                                </SwiperSlide>
                            
                                <SwiperSlide>
                                    <div className={styleReviews['reviews__clients--swiper']}>
                                        <div className={styleReviews['client__img']}>
                                            <img src='/clients/ev.jpg'></img>
                                        </div>
                                        <h1>Ekaterina Volkova </h1>
                                        <p> 
                                        “We rented a Renault for a vacation, the whole family was just delighted! The car was perfect for traveling around the island. You have made our little vacation comfortable and enjoyable!”
                                        </p>
                                    </div>
                                    
                                </SwiperSlide>
                        </Swiper>    
            </div>
            
        </div>
        <div className={styleReviews.reviews__results}>
            <div>
                <p></p>cars
            </div>
            <div>
                Completed order
            </div>
            <div>
                Partners
            </div>
            <div>
                Clients
            </div>
        </div>
     </section>
    )
    
    
}

export default Reviews;