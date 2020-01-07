import React from "react";
import Slider from "react-slick";

export default class Categories extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div className="categories-slider">
                    <p className='categ-text'>Всі вакансії</p>
                </div>
                <div className="categories-slider-1">
                    <p className='categ-text'>IT</p>
                </div>
                <div className="categories-slider-2">
                    <p className='categ-text'>Аудит</p>
                </div>
                <div className="categories-slider-3">
                    <p className='categ-text'>Логістика</p>
                </div>
                <div className="categories-slider-4">
                    <p className='categ-text'>Менеджемент</p>
                </div>
                <div className="categories-slider-5">
                    <p className='categ-text'>Маркетинг</p>
                </div>
                <div className="categories-slider-6">
                    <p className='categ-text'>Облік</p>
                </div>
                <div className="categories-slider-7">
                    <p className='categ-text'>Копірайтинг</p>
                </div>
            </Slider>
        );
    }
}