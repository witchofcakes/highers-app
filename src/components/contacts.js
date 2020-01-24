import React from 'react';
import Footer from "./footer";
import Footer_Contacts from "./footer_contacts";

export default class Contact_Us extends React.Component  {

    render() {

        return (
            <div>

                {/*<div className="row contacts-row">*/}
                {/*    <div className="col-12">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-12 column-contacts">*/}
                {/*                <div className="filter-contacts"></div>*/}
                {/*                <div className="col-12">*/}
                {/*                    <p className="contacts-big-text">Напишіть нам</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="row row-center-contacts">*/}
                {/*            <div className="col-4 column-contacts-shadow">*/}

                {/*            </div>*/}
                {/*            <div className="col-4 column-contacts-shadow-1">*/}
                {/*                <div className="row row-contacts">*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-email-contacts">*/}
                {/*                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>*/}
                {/*                        <polyline points="22,6 12,13 2,6"></polyline>*/}
                {/*                    </svg>*/}
                {/*                    <p className="contacts-email">contact.us@highers.co</p>*/}
                {/*                </div>*/}
                {/*                <div className="row row-contacts">*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-call-contacts">*/}
                {/*                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>*/}
                {/*                </svg>*/}
                {/*                <p className="contacts-phone">+38&nbsp;(067)&nbsp;289-43-15</p>*/}
                {/*                </div>*/}
                {/*                <div className="row row-contacts">*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-job-contacts">*/}
                {/*                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>*/}
                {/*                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>*/}
                {/*                </svg>*/}
                {/*                <p className="contacts-phone">*/}
                {/*                    <a href="#" className="link-employer-contacts">Для роботодавця</a>*/}
                {/*                </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-4 column-contacts-shadow">*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-12">*/}
                {/*    <Footer_Contacts/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="full">
                    <div className="row contacts-row">
                        <div className="col-12">
                            <p className="contacts-big-text-mobile">Напишіть нам</p>
                        </div>
                    </div>

                    <div className="row row-center-contacts">
                        <div className="col-12 column-contacts-shadow-1">
                            <div className="row-contacts-mobile">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-email-contacts">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <p className="contacts-email">contact.us@highers.co</p>
                            </div>
                            <div className="row-contacts-mobile">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-call-contacts">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <p className="contacts-phone">+38&nbsp;(067)&nbsp;289-43-15</p>
                            </div>
                            <div className="row-contacts-mobile">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-job-contacts">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <p className="contacts-phone">
                                    <a href="#" className="link-employer-contacts">Для роботодавця</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    {/*<div className="col-12">*/}
                    {/*    <Footer_Contacts/>*/}
                    {/*</div>*/}
            </div>
        );
    }
}