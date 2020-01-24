import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Pagination_Mob extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
        };
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
    };

    render() {
        return (
            <div className="commentBox">
                {/*<CommentList data={this.state.data} />*/}
                <ReactPaginate
                    previousLabel=<ArrowBackIosIcon className="arrow-pag-prev"/>
                    nextLabel=<ArrowForwardIosIcon className="arrow-pag-next"/>
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={10}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={2}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}