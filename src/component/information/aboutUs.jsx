import { useState,useEffect } from 'react'
import '../../assets/css/Information.scss'


function aboutUs({url}) {
  
    return(
      <>
      
      <div className='information'>
             <div className='information_row'>

                <div className='information_row-blockRow'>
                    <h2>
                    Flexible Long Term Rentals 
                    </h2>
                    <p>
                    Looking to rent on a monthly basis? We offer a fixed monthly rate at a discounted price. No extra fees, no need to worry about maintenance, repairs, insurance, road taxes or a replacement car in case of damage. Plus, you can cancel anytime with no penalty after two months. Free additional driver and unlimited miles included. 
                    </p>
                </div>
                <div className='information_row-blockRow'>
                    <img src={url+'./cabriolet.jpg'} alt='cabriolet'></img>
                </div>
            </div>
            
        </div>

        <div className='information'>
             <div className='information_row'>
                <div className='information_row-blockRow'>
                    <img src={url+'/car-driver.png'} alt='car-driver'></img>
                </div>
                
                <div className='information_row-blockRow'>
                    <h2>
                    About Us                    </h2>
                    <p>
                    llure car rentals is a family-run business based in Limassol. We provide luxury and affordable cars, friendly service and prices. You can book your car online easily and securely through our website, or you can contact us by phone or email if you have any questions or special requests. We are available 24/7 to assist you with your car rental needs.

We are more than a car rental company. We are your partner in exploring the beautiful island of Cyprus. With your own car, you can explore the island and its attractions and discover the rich history and culture of Cyprus.
                    </p>
                </div>
                
            </div>
            
        </div>
        </>
    )
    
    
}

export default aboutUs;