import React, { PureComponent } from 'react';
import logo from '../images/logo-mountain.png'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import place from '../images/place.svg'
import insta from '../images/instagram.svg'
import teleg from '../images/telegram.svg'
import fb from '../images/facebook.svg'


class Footer_Vac extends React.Component {
    render() {
        return (
            <footer className="page-footer-short font-small stylish-color-dark">
                <div className="row py-4 d-flex align-items-center">


                    <div className="col-md-2 col-lg-2 text-center-short text-md-left mb-4 mb-md-0">
                        <img src={logo} className="logo-mount" />
                    </div>


                    <div className="col-md-5 col-lg-5 text-center-short no-gutters text-md-right">


                        <a target="_blank" className="footer-a-blog" href="https://t.me/highersdigest">Блог</a>


                        <a target="_blank" href="https://t.me/higherspro" className="fb-ic">
                            <img src={teleg} className="telegram"/>
                        </a>

                        <a target="_blank" href="https://instagram.com/highers.official?igshid=l77dct5ul99v" className="tw-ic">
                            <img src={insta} className="insta"/>
                        </a>

                        {/*<a target="_blank" className="gplus-ic">*/}
                        {/*    <img src={fb} className="facebook"/>*/}
                        {/*</a>*/}

                    </div>

                    <div className="col-md-5 col-lg-5 text-center-short text-md-right">
                        <div className="div-footer">
                        <a target="_blank" className="footer-a" href="/confidential">
                            Конфіденційність</a>
                            <span className="vacancy-dot-footer">•</span>
                        </div>

                        <a target="_blank" className="footer-a" href="/all-vacancies">
                            Вакансії
                        </a>

                    </div>

                </div>


                <div className="footer-copyright-short text-center py-3">
                    © 2019 Copyright HIGHERS
                </div>
            </footer>

        );
    }
}

export default Footer_Vac;