import React from 'react';
import search from '../images/search-gray.svg';
import search_bl from '../images/search-black.svg';
import Filter from "./filter";
import Pagination_Comp from "./pagination";
import Footer from "./footer";
import Scroll from "./scroll_top";
import Vac from "./vac_info";
import Vacancy from "./vacancy_long";
import Filter_Top from "./filter_top";
import arrow from "../images/left-arrow-2.svg";
import Search_Top from "./search_filter_top";
import Vac_Mobile from "./vacancy_page_mobile";

class Vac_Page extends React.Component {

    render() {

        return (
            <div>
            {/*<div className="desktop-description">*/}
            {/*   <div className="container">*/}
            {/*       <div className="row">*/}
            {/*           <div className="col-12 filter-top">*/}
            {/*               <div className="row">*/}
            {/*                   <div className="col-12 full-filter">*/}
            {/*                       <div className="row">*/}
            {/*                            <div>*/}
            {/*                                <a className="back-to-vac-link" href="/all-vacancies">*/}
            {/*                                    <button className="back-to-vac-but">*/}
            {/*                                        <img src={arrow} className="arrow-back"/> Всі вакансії*/}
            {/*                                    </button>*/}
            {/*                                </a>*/}
            {/*                                <Search_Top/>*/}
            {/*                            </div>*/}
            {/*                            <div>*/}
            {/*                                <Filter_Top/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                   </div>*/}
            {/*               </div>*/}
            {/*           </div>*/}
            {/*       </div>*/}
            {/*   </div>*/}

            {/*    <Vac/>*/}
            {/*</div>*/}
                <div className="mobile-description">
                    <Vac_Mobile/>
                </div>
            </div>

        );
    }
}

export default Vac_Page;