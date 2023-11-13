import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Content from "./ContentPopup";
// import Popup from "reactjs-popup";

import Cookies from 'js-cookie';
import "../../assets/css/carItem.scss";
import stylePrivacy from '../../assets/css/privacy.module.scss'

const PrivacyPolicy = ({ url }) => {
  // const url = "http://localhost:5173/";


  return (
    <section>
        <div className={stylePrivacy[`privacy`]}>
            <p>Please read this policy carefully. Here you will find important information about the processing of your
                personal data and your rights under the relevant legislation.</p>
            <p>We reserve the right to update our privacy policy at any time due to operational decisions, as well as to
                comply with any legislative or jurisprudential changes. If you have any questions or need any
                clarification
                regarding our Privacy Policy or your rights, you can contact us through the channels indicated
                below.</p>
            <p>In the event of providing personal data of third parties, we undertake to obtain the prior consent of
                those
                concerned and to inform them of the content of this policy.</p>
            <p>The fields of our forms that are marked as compulsory must be filled in to process your request.</p>

            <h3 class="section-sub-title">1. Who is responsible for the processing of your data?</h3>
            <p>Unless specifically indicated otherwise, Auto Allure Luxury Car Rental Ltd is responsible for the
                processing
                of your personal data (hereinafter referred to as <strong>Auto Allure Ltd</strong>) with registered
                address at RLeoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532;
                Email: <a class="seo-link" href="mailto:autoallure@protonmail.com"
                          rel="noopener" target="_blank"> autoallure@protonmail.com</a>; Phone. +357 9966 7777 </p>

            <h3 class="section-sub-title">2. What will we process your data for and on what legal basis?</h3>
            <p><strong>Management of bookings and provision of requested services.</strong> The data provided in your
                reservation or service requests will be processed for the management of such reservations and the
                provision of
                the services requested. The categories of data we process for these purposes are as follows:</p>
            <ul>
                <li>Identification data (name, surname) and contact details (address, email and telephone) of the holder
                    of the
                    reservation or contract;
                </li>
                <li>Data on personal characteristics (nationality and age)</li>
                <li>Details of the booking itself (dates of the booking, type of vehicle booked, flight number in case
                    of
                    airport pick-up, and ancillary services included in the booking).
                </li>
                <li>Financial and transactional data.</li>
            </ul>
            <p>These processing operations are necessary for the performance of the contract or for the implementation
                of
                pre-contractual measures at the request of the data subjects.</p>
            <p>Economic data and data on transactions of goods and services will be processed for accounting and
                administrative management purposes and the fulfilment of our legal obligations in accounting and
                taxation
                matters.</p>

            <p><strong>Response to queries and complaints</strong> The data provided in your enquiries or complaints
                will be
                processed in order to deal with your requests and handle any complaints you may have. </p>
            <p>These processing operations are necessary for the performance of the contract, the implementation of
                pre-contractual measures at the request of the data subjects or the defense of customer claims.</p>
            <p>The processing of any health data you have provided in your complaint is covered by Art. 9.2. f) of the
                GDPR,
                where such processing is necessary for the formulation, exercise or defense of claims.</p>
            <p><strong>Statistical and quality management purposes:</strong> In order to evaluate and manage the quality
                of
                our services and products, we process identifying data and contact details provided by our customers to
                send
                them rating requests or feedback about their experience with us. We also perform statistics based on
                aggregated
                data obtained from transaction data and web browsing data, e.g. IP address, weblogs, pages visited or
                actions
                performed on the website (+ info in our cookies policy). </p>
            <p>These processing operations are based on our legitimate interest to evaluate and manage the quality of
                our
                services and products. In weighing this interest against their rights and freedoms, it was determined
                that the
                processing had a limited impact on the privacy of data subjects, as it corresponded to their reasonable
                expectations and did not pose significant threats as it was carried out on aggregated data and with the
                consent
                of the data subjects themselves with respect to the metrics conducted with the use of cookies.</p>

            <p><strong>Sending of commercial communications and management of distribution lists:</strong> We process
                the
                identification and contact data provided by our customers and those who sign up to our distribution
                lists in
                order to send them communications about our activities, products and services.</p>
            <p>These processing operations are based on the consent that you are asked to give. Failure to give or
                withdrawal
                of consent does not condition the execution of the order or the provision of the contracted
                services.</p>
            <p>You may at any time request to unsubscribe from the processing for commercial purposes by activating the
                mechanism provided for this purpose in our communications or by sending an email to: <a class="seo-link"
                                                                                                        href="mailto:autoallure@protonmail.com"
                                                                                                        rel="noopener"
                                                                                                        target="_blank">autoallure@protonmail.com</a>
            </p>

            <p><strong>To whom may we disclose your data?</strong></p>
            <p>Your data will only be disclosed to third parties if legally obliged to do so, with your consent, to
                other
                entities that are part of <strong>Auto Allure</strong> for administrative purposes or when it is
                necessary for the
                correct processing of the reservation or the provision of the requested services. Specifically:: </p>
            <p>For the correct processing of the reservation, the data provided will necessarily be communicated to the
                rental
                company providing the selected vehicle (more information in the reservation conditions stipulated on the
                page
                from which the reservation is requested or formalised) or to the companies whose services are included
                in the
                contracted service, for example: intermediary and insurance company in the case of contracting a
                "Vehicle rental
                excess insurance" (more information in the conditions and policy document accessible from the page from
                which
                the reservation is requested or formalised).</p>
            <p>Furthermore, where necessary for their resolution, we will pass on your complaints to the service
                providers
                affected by them. Likewise, depending on the nature of your claim, the recipients of the data included
                in the
                same may be, among others, insurance entities, public administrations or entities, official bodies,
                solicitors,
                judges and courts. These communications are necessary either for the provision of the contracted
                services or for
                the application of pre-contractual measures at your request, or for the formulation, exercise or defense
                of
                claims.</p>
            <p>These communications may involve the transfer of your data to third countries when the aforementioned
                companies
                are located outside the European Economic Area.</p>
            <p>Your data will also be communicated to the entity Auto Allure Ltd, member of
                <strong>Auto Allure</strong>, with registered address at Leoforos Amathous 32 Zanna Complex Block 1 Shop
                8 Limassol
                4532, for
                internal administrative purposes and, if you have consented, for marketing purposes and commercial
                mailings
                relating to <strong>Auto Allure</strong>.</p>

            <h3 class="section-sub-title">3. How long do we keep your data for?</h3>
            <p>In general, we will retain your data for the duration of your relationship with us and in any case for as
                long
                as required by applicable legal provisions, e.g. for accounting and tax purposes, and for as long as
                necessary
                to meet any liabilities arising from the processing. We will delete your data when they are no longer
                necessary
                or relevant for the purposes for which they were collected. The information related to navigation will
                be
                cancelled once the web connection has ended and the statistics have been carried out.</p>
            <p>Data processed for marketing purposes, including marketing profiles, will be retained for as long as no
                request
                for deletion has been made.</p>

            <h3 class="section-sub-title">4. What are your rights?</h3>
            <p>You have the right to obtain confirmation as to whether or not we are processing your personal data and,
                if so,
                to access it. You can also ask for your data to be corrected if they are inaccurate or for incomplete
                data to be
                completed, as well as request their deletion if, among other reasons, the data are no longer necessary
                for the
                purposes for which they were collected.</p>
            <p>In certain circumstances, you may request that we restrict the processing of your data. In this case, we
                will
                only process the data concerned for the formulation, exercise or defense of claims or for the protection
                of the
                rights of other persons. Under certain conditions and for reasons relating to your particular situation,
                you may
                also object to the processing of your data. In this case, we will stop processing the data except for
                compelling
                legitimate reasons that override your interests or rights and freedoms, or for the formulation, exercise
                or
                defence of claims. You may also, under certain conditions, request the portability of your data to be
                transferred to another data controller.</p>
            <p>You may withdraw your consent for certain purposes, without affecting the lawfulness of the processing
                based on
                your consent prior to its withdrawal, and lodge a complaint with the Spanish Data Protection Agency.</p>
            <p>You also have the right to lodge a complaint with a data protection authority. A list and contact details
                of
                the European data protection agencies can be found on the European Commission's website at <a
                        class="seo-link"
                        href="http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080"
                        rel="noopener nofollow"
                        target="_blank">http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080</a>.
            </p>
            <p>You may at any time request to unsubscribe from the processing for commercial purposes by activating the
                mechanism provided for this purpose in our communications or by sending an email to: <a class="seo-link"
                                                                                                        href="mailto:autoallure@protonmail.com"
                                                                                                        rel="noopener"
                                                                                                        target="_blank">autoallure@protonmail.com</a>
            </p>
            <p>To exercise your rights, you must send us a request by post or e-mail to the addresses indicated in the
                section
                Who is responsible for the processing of your data?</p>
            <p>You can obtain more information about your rights and how to exercise them on the website of the Spanish
                Data
                Protection Agency at <a class="seo-link" href="https://www.aepd.es" rel="noopener nofollow"
                                        target="_blank">https://www.aepd.es</a> or on the website of the data protection
                authority
                in your country.
            </p>
        </div>
    </section>
  );
};

export default PrivacyPolicy;
