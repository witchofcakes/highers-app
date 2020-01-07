import React from "react";
import Slider from "react-slick";
import deloitte from '../images/deloitte-logo.png'
import ey from '../images/ey-logo.svg'
import jooble from '../images/jooble-logo.png'
import procredit from '../images/procredit.png'
import luxoptica from '../images/luxoptica.png'
import mmd from '../images/mmd.png'
import brokbridge from '../images/brokbridge.jpg'
import vencon from '../images/vencon.png'

export default class Partners extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1300,

        };
        return (
            <Slider {...settings}>
                <div className="partners-div-2">
                    <img src={deloitte} className="deloitte"/>
                </div>
                <div className="partners-div">
                    <img src={ey} className="ey"/>
                </div>
                <div className="partners-div-2">
                    <img src={jooble} className="jooble"/>
                </div>
                <div className="partners-div">
                    <img src={procredit} className="procredit"/>
                </div>
                <div className="partners-div-2">
                    <img src={luxoptica} className="luxoptica"/>
                </div>
                <div className="partners-div">
                    <img src={mmd} className="mmd"/>
                </div>
                <div className="partners-div-2">
                    <img src={brokbridge} className="brok"/>
                </div>
                <div className="partners-div">
                    <img src={vencon} className="vencon"/>
                </div>
            </Slider>
        );
    }
}