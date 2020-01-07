import React, { PureComponent } from 'react';
import logo from '../images/logo-mountain.png'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import place from '../images/place.svg'
import insta from '../images/instagram.svg'
import teleg from '../images/telegram.svg'
import fb from '../images/facebook.svg'


class Footer extends React.Component {
    render() {
        return (
                <footer className="page-footer font-small stylish-color-dark">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <img src={logo} className="logo-mount" />
                                {/*<p className="footer-phone">*/}
                                {/*    highers.co*/}
                                {/*</p>*/}
                                {/*<a href="#" className="footer-email">*/}
                                {/*    Конфіденційність*/}
                                {/*</a>*/}
                            </div>

                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-md-3 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Робота</h5>
                                <ul className="list-unstyled">
                                    <li className="footer-li">
                                        <a className="footer-a" href="#!">Вакансії</a>
                                    </li>
                                    <li className="footer-li">
                                        <a className="footer-a" href="#!">Про нас</a>
                                    </li>
                                    <li className="footer-li">
                                        <a className="footer-a" href="#!">Для роботодавця</a>
                                    </li>
                                    <li className="footer-li">
                                        <a className="footer-a" href="#!">Конфіденційність</a>
                                    </li>
                                </ul>
                            </div>

                            <hr className="clearfix w-100 d-md-none"/>

                            <div className="col-md-3 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Контакти</h5>
                                <ul className="list-unstyled">
                                    <li className="footer-li">
                                        <img src={phone} className="phone" />
                                        <p className="phone-footer">+38 (067) 220-08-73</p>
                                    </li>
                                    <li className="footer-li">
                                        <img src={mail} className="mail" />
                                        <p className="phone-footer">contact.us@highers.co</p>
                                    </li>
                                    <li className="footer-li">
                                        <img src={place} className="place" />
                                        <p className="phone-footer">м. Київ</p>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"/>

                            <div className="col-md-2 mx-auto">

                                <div className="font-weight-bold text-uppercase mt-3 mb-4 footer-li-follow-bold">Підписуйся</div>

                                <ul className="list-unstyled">
                                    <li className="footer-li-follow">
                                        <a className="footer-a-blog" href="#!">Блог</a>
                                    </li>
                                    <li className="footer-li-follow">
                                        <img src={insta} className="insta" />

                                    </li>
                                    <li className="footer-li-follow">
                                        <img src={teleg} className="telegram" />

                                    </li>
                                    <li className="footer-li-follow">
                                        <a></a><img src={fb} className="facebook" />

                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="footer-copyright text-center py-3">© 2019 Copyright HIGHERS
                    </div>
                </footer>

        );
    }
}

export default Footer;