import { useState, useEffect } from "react";
import "../../assets/css/Information.scss";
import "../../assets/css/faq.scss";

import { faqList } from "../../assets/js/faq";

function FAQS() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="information">
      <div className="information_row">
        <div className="faq">
          {faqList.map((item, index) => {
            return (
              <div className="faq_item" key={item.index} onClick={() => handleChange(index)}>
                <p className={`faq_title ${activeIndex === index ? 'open' : ''}`}>
                  {item.title}
                </p>
                <p className={`faq_content ${activeIndex === index ? 'open' : ''}`}>
                <p className="faq_text">{item.content}</p>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQS;
