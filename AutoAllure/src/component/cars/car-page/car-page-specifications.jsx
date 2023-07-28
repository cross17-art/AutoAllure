import { useState,useEffect,useRef  } from "react";
import styleOrder from '../../../assets/css/orderSteps.module.scss'
import styleInformation from '../../../assets/css/Information.module.scss'

const carPageSpecifications = ({carData}) => {
 
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const cloneRef = useRef(null);
  
    useEffect(() => {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;
  
      if (containerWidth < contentWidth) {
        let animationFrame;
        let currentPosition = containerWidth;
  
        const animateText = () => {
          currentPosition -= 1; // Скорость прокрутки, уменьшив значение, вы увеличите скорость
          if (currentPosition < -contentWidth) {
            currentPosition = containerWidth;
          }
          contentRef.current.style.transform = `translateX(${currentPosition}px)`;
          cloneRef.current.style.transform = `translateX(${currentPosition + contentWidth}px)`;
          animationFrame = requestAnimationFrame(animateText);
        };
  
        animationFrame = requestAnimationFrame(animateText);
  
        return () => {
          cancelAnimationFrame(animationFrame);
        };
      }
    }, []);

  return (
    <>
    

     <section data="car-specifications" ref={containerRef}> 
        <div className={styleOrder['running-items-container']} ref={containerRef}>
            <div className={styleOrder['running-items']} ref={contentRef}>

                <div className={styleOrder['running-items']}>
                    123123
                </div>
                <div className={styleOrder['running-items']}>
                    asd
                </div>
                <div className={styleOrder['running-items']}>
                    asd123
                </div>
                <div className={styleOrder['running-items']}>
                    12ad
                </div>
                <div className={styleOrder['running-items']}>
                    zxcvb
                </div>
            </div>
            <div className={styleOrder['running-items']} ref={cloneRef}>

                <div className={styleOrder['running-items']}>
                    123123
                </div>
                <div className={styleOrder['running-items']}>
                    asd
                </div>
                <div className={styleOrder['running-items']}>
                    asd123
                </div>
                <div className={styleOrder['running-items']}>
                    12ad
                </div>
                <div className={styleOrder['running-items']}>
                    zxcvb
                </div>
            </div>
        </div>

        {/* <h1 className={styleOrder.order__line}>Vehicle  <a>Characteristics</a></h1>

        <div className={`${styleOrder.order}`}>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                    <span> Transmission</span>
                    <h1>{carData.transmission.split(" ")[0]}</h1>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                    <span>Body type</span>
                    <h1>{carData.body_type}</h1>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                    <span>Number seats</span>
                    <h1>{carData.number_seats}</h1>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                    <span>Bags</span>
                    <h1>{carData.large_bags}</h1>
                </div>
            </div>
            <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
                <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
                    <span>Volume engine</span>
                    <h1>{carData.volume_engine}</h1>
                </div>
            </div>
        </div> */}
     </section>
    </>
  );
};

export default carPageSpecifications;



//   <section data="car-specifications" ref={containerRef}> 
{/* <h1 className={styleOrder.order__line}>Vehicle  <a>Characteristics</a></h1>

<div className={`${styleOrder.order}`}>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span> Transmission</span>
            <h1>{carData.transmission.split(" ")[0]}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Body type</span>
            <h1>{carData.body_type}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Number seats</span>
            <h1>{carData.number_seats}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Bags</span>
            <h1>{carData.large_bags}</h1>
        </div>
    </div>
    <div className={`${styleOrder['order__steps']} ${styleOrder['order__specifications']}`}>
        <div className={`${styleOrder.spec} ${styleOrder['order__steps--element']}`}>
            <span>Volume engine</span>
            <h1>{carData.volume_engine}</h1>
        </div>
    </div>
</div>
</section> */}