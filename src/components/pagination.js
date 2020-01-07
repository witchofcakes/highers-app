import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Pagination_Comp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vacancies: [],
            currentPageNumber: 1,
            totalItems: 100,
            itemsPerPage: 10,
            pageRangeDisplayed: 5,
        };
    }

    handleSelect(number) {
        this.setState({currentPageNumber: number});
    }

    render() {

        let totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);

        return (
            <div>
                <Pagination
                    prevPageText=<ArrowBackIosIcon className="arrow-pag"/>
                    nextPageText=<ArrowForwardIosIcon className="arrow-pag"/>
                    firstPageText="Перша"
                    lastPageText="Остання"
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    totalItemsCount={this.state.totalItems}
                    itemsCountPerPage={totalPages}
                    activePage={this.state.currentPageNumber}
                    onChange={this.handleSelect.bind(this)}
                />
            </div>
        );
    }
}