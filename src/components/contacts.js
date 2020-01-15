import React from 'react';
import Footer from "./footer";
import Footer_Contacts from "./footer_contacts";

export default class Contact_Us extends React.Component  {

    render() {

        return (
            <div className="container-contacts">
                <div className="row contacts-row">
                    <div className="col-6 column-contacts">
                        <div>
                        <p className="contacts-big-text">Get in touch.</p>
                        <p className="contacts-small-text">
                            Напишіть нам із будь-яких питань.
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Ми із задоволенням відповімо.
                        </p>
                        </div>
                    </div>
                    <div className="col-6 column-contacts">
                        <div>
                        <p className="contacts-email">contact.us@highers.co</p>
                        <p className="contacts-phone">+38&nbsp;(067)&nbsp;289-43-15</p>
                        <p className="contacts-phone">
                            <a href="#" className="link-employer-contacts">Для роботодавця</a>
                        </p>
                        </div>
                    </div>
                </div>

                <Footer_Contacts/>

            </div>
        );
    }
}