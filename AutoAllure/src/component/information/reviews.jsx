import { useState,useEffect,useRef } from 'react'
import styleReviews from '../../assets/css/reviews.module.scss'
// import FAQS from './faqs'
// import AboutUs from './aboutUs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function Reviews({url}) {
    const [countCars, setCountCars] = useState(1);
    const [countOrders, setCountOrders] = useState(1);
    const [countClients, setCountClients] = useState(1);
    const [countPartners, setCountPartners] = useState(1);
    const blockRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const block = blockRef.current;
            const blockBottom = block.getBoundingClientRect().bottom
            const windowBottom = window.innerHeight;

            if (blockBottom <= windowBottom) {
                console.log('Блок прокручен до видимости!');
                // counter
                const targetValue = 2310;
                const duration = 2000;
                const step = targetValue / (duration / 100);

                const intervalOrders = setInterval(() => {
                    setCountOrders((prevCount) => {
                        
                        const newCount = prevCount + step;
                        if (newCount >= 1950) {
                         clearInterval(intervalOrders);
                         window.removeEventListener('scroll', handleScroll);
                        }
                        return Math.floor(newCount);
                    });
                }, 10);
                const intervalClients = setInterval(() => {
                    setCountClients((prevCount) => {
                        const newCount = prevCount + 1;
                        if (newCount >= 78) {
                            clearInterval(intervalClients);
                            window.removeEventListener('scroll', handleScroll);
                        }
                        return newCount;
                    });
                }, 10);
                const intervalCars = setInterval(() => {
                    setCountCars((prevCount) => {
                        const newCount = prevCount + 1;
                        if (newCount >= 42) {
                            clearInterval(intervalCars);
                            window.removeEventListener('scroll', handleScroll);
                        }
                        return newCount;
                    });
                }, 10);
                const intervalPartners = setInterval(() => {
                    setCountPartners((prevCount) => {
                        const newCount = prevCount + 1;
                        if (newCount >= 3) {
                            clearInterval(intervalPartners);
                            window.removeEventListener('scroll', handleScroll);
                        }
                        return newCount;
                    });
                }, 10);
                setTimeout(()=>{
                   
                },1500)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return(
     <section data="reviews">
        
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
        <div className={styleReviews.reviews__results} ref={blockRef}>
            <div className={styleReviews['reviews__results--counter']}>
                <div className={styleReviews['reviews__results--counter-item']}>
                    <p>{countCars}</p>
                    <span>cars</span> 
                </div>
                <div className={styleReviews['reviews__results--counter-item']}>
                    <p>{countPartners}</p>
                    <span>partners</span>
                </div>
                <div className={styleReviews['reviews__results--counter-item']}>
                    <p>{countOrders}</p>
                    <span>orders</span>
                    
                </div>
                <div className={styleReviews['reviews__results--counter-item']}>
                    <p>{countClients}</p>
                    <span>clients</span>
                </div>    
            </div>
            
        </div>
     </section>
    )
    
    
}

export default Reviews;