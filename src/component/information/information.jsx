import FAQS from './faqs'
// import AboutUs from './aboutUs'
import Reviews from './reviews';
import OurService from './ourService';
import HelpPhone from './helpPhone';
import OrderSteps from './orderSteps';
import LocationMap from '../screen/locationMap';
function information({url}) {
  
    return(
     <>
        <OurService url={url}/>
        <LocationMap url={url}/>

        <OrderSteps />

        <Reviews url={url}/>
        <HelpPhone />
        <FAQS />
        
{/* 
        
        <AboutUs url={url} /> */}
     </>
    )
    
    
}

export default information;