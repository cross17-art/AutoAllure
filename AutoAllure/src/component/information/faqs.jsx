import { useState, useEffect } from "react";
import styleInformation from  "../../assets/css/Information.module.scss";
import "../../assets/css/faq.scss";

import { faqList } from "../../assets/js/faq";

function FAQS() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section data="faqs" id="comapny">
        <div className="w-100">
              <div className="blockFAQS">
                <h1 >FAQS</h1>
                <div className="faq">
                  {faqList.map((item, index) => {
                    return (
                      <div className="faq_item" key={item.index+item.title} onClick={() => handleChange(index)}>
                        <p className={`faq_title ${activeIndex === index ? 'open' : ''}`}>
                          {item.title}
                        </p>
                        <div className={`faq_content ${activeIndex === index ? 'open' : ''}`}>
                           <p className="faq_text">{item.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
    </section>
    
  );
}

export default FAQS;
