import { useState,useEffect } from 'react'
import styleInformation from '../../assets/css/Information.module.scss'
// import FAQS from './faqs'
// import AboutUs from './aboutUs'

function helpPhone({url}) {
  
    return(
     <section data="helpPhone">

        <div className={`${styleInformation.information} ${styleInformation.info}`}>
            <div className={styleInformation["information__help"]}>
                <div className={styleInformation['information__help--text']}>
                    <p>
                        You have questions? Feel free to ask
                    </p>
                </div>
                <div className={styleInformation['information__help--number']}>
                    <a className="footerContact_item-link" href="tel: +35799667777">
                        +357&nbsp;996&nbsp;7777
                    </a>
                </div>
            </div>
        </div>

        
{/* 
        <FAQS />
        <AboutUs url={url} /> */}
     </section>
    )
    
    
}

export default helpPhone;