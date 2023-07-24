import { useState,useEffect } from 'react'
// import styleInformation from '../../assets/css/Information.module.scss'
import styleCarDiscount from '../../assets/css/discount.module.scss'
import styleReviews from '../../assets/css/reviews.module.scss'
import styleBanner from  '../../assets/css/banner.module.scss'

// import FAQS from './faqs'
// import AboutUs from './aboutUs'

function carDiscount({url}) {
  
    return(
     <section data="carSales">
        
        <div className={styleCarDiscount.carDiscount}>
            <div className={styleCarDiscount[`carDiscount__block`]}>
                <div className={styleCarDiscount[`carDiscount__block--text`]}>
                    <h1 >Monthly sale 
                        <span>SAVE UP TO 20%</span>
                    </h1>
                    <div className={` carList__text--line`}>
                        <div className='carList__text--line_item1'></div>
                        <div className='carList__text--line_item2'></div>
                    </div>
                    <p>
                        We have the most interesting and profitable offers on discounts and tariffs. It is worth noting that the long term rental will save your budget.
                    </p>
                </div>
                <div className={`${styleCarDiscount["carDiscount__block--pictures"]}`}>
                   <div className={styleCarDiscount[`carDiscount__block--pictures-carImg`]}></div>

                    <div className={styleReviews['reviews__results--counter']}>
                        <div className={styleCarDiscount[`carDiscount__block--pictures_item`]}>
                            <h1>
                                Renault Captur 2022
                            </h1>
                            <span>
                                €1395/month
                            </span>
                            <button type='button' className={styleBanner['btnBanner__orange--discount']}>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styleCarDiscount["carDiscount__block--pictures"]}`}>
                    <div className={styleCarDiscount[`carDiscount__block--pictures-carImg2`]}></div>
                    <div className={styleReviews['reviews__results--counter']}>
                        <div className={styleCarDiscount[`carDiscount__block--pictures_item`]}>
                            <h1>
                                Renault Kadjar 2022
                            </h1>
                            <span>
                                €1550/month
                            </span>
                            <button type='button' className={styleBanner['btnBanner__orange--discount']}>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

     </section>
    )
    
    
}

export default carDiscount;