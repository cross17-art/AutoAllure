import { useState,useEffect } from 'react'
import '../../assets/css/Information.scss'


function Footer() {

  return (
       <>
        <div className='information footer'>
            
            <div className='information_row'>

                <div className='information_row-blockFooter'>
                    <h1>
                        We are always ready to help
                    </h1>
                    <p>
                        You can always contact us if you need help with a car or housing in general.
                        We are always happy to help you with the hotel, the organization of any events,
                        excursions and generally fulfill any of your wishes.
                        Our managers and support service are always happy to help.
                    </p>
                </div>
                
            </div>
       
            
        </div>
        


        <div className='information footerContact'>
            
         
            <div className='information_row'>

                <div className='information_row-blockFooterContact'>
                    
                    <p>Phone +357 9966 7777</p>
                    <p>Email autoallure@protonmail.com</p>
                    <p>Address
Leoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532 </p>
                </div>
                
            </div>
            
        </div>
        </>
  )
}

export default Footer
