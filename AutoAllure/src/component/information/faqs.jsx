import { useState, useEffect } from "react";
import "../../assets/css/Information.scss";
import "../../assets/css/faq.scss";
//import Faq from "react-faq-component";

import { faqList } from "../../faq";

function FAQS() {
  return (
    <>
      <div className="information">
        <div className="information_row">
          <div className="faq">
            {faqList.map((item) => {
              return (
                <details key={item.title}>
                  <summary className="faq_title">{item.title}</summary>
                  <p className="faq_content">{item.content}</p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQS;
