import React, { PureComponent } from 'react';
import logo from '../images/logo-mountain.png'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import place from '../images/place.svg'
import insta from '../images/instagram.svg'
import teleg from '../images/telegram.svg'
import fb from '../images/facebook.svg'


class Footer_Empl extends React.Component {
    render() {
        return (
            <footer className="page-footer-short font-small stylish-color-dark">
                <div className="row py-4 d-flex align-items-center">


                    <div className="col-md-2 col-lg-2 text-center-short text-md-left mb-4 mb-md-0">
                        <img src={logo} className="logo-mount" />
                    </div>


                    <div className="col-md-5 col-lg-5 text-center-short no-gutters text-md-right">
                        <a target="_blank" className="footer-a-blog" href="https://t.me/highersdigest">Блог</a>

                        <a target="_blank" href="https://t.me/higherspro">
                            <svg height="27px" id="telegram" viewBox="0 -39 512.00011 512" width="27px" xmlns="http://www.w3.org/2000/svg"><path d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0"/></svg>
                        </a>

                        <a target="_blank" href="https://instagram.com/highers.official?igshid=l77dct5ul99v">
                            <svg id="insta" height="27px" width="27px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728V363.272z"/>
                                <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
                                <circle cx="396" cy="116" r="20"/>
                            </svg>
                        </a>

                        {/*<a target="_blank" className="gplus-ic">*/}
                        {/*    <img src={fb} className="facebook"/>*/}
                        {/*</a>*/}

                    </div>

                    <div className="col-md-5 col-lg-5 text-center-short text-md-right">
                        <div className="div-footer">
                            <a target="_blank" className="footer-a" href="/confidential">
                                Конфіденційність
                            </a>
                            <span className="vacancy-dot-footer">•</span>
                        </div>

                        <a target="_blank" className="footer-a" href="/all-vacancies">
                            Вакансії
                        </a>

                    </div>

                </div>


                <div className="footer-copyright-employer text-center py-3">
                    © 2020 Copyright HIGHERS
                </div>
            </footer>

        );
    }
}

export default Footer_Empl;