// import React, { Component } from 'react';
// import Pagination from "react-js-pagination";
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//
// export default class Pagination_Comp extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             vacancies: [],
//             currentPageNumber: 1,
//             totalItems: 100,
//             itemsPerPage: 10,
//             pageRangeDisplayed: 5,
//         };
//     }
//
//     handleSelect(number) {
//         this.setState({currentPageNumber: number});
//     }
//
//     render() {
//
//         let totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
//
//         return (
//             <div>
//                 <Pagination
//                     prevPageText=<ArrowBackIosIcon className="arrow-pag"/>
//                     nextPageText=<ArrowForwardIosIcon className="arrow-pag"/>
//                     firstPageText="Перша"
//                     lastPageText="Остання"
//                     pageRangeDisplayed={this.state.pageRangeDisplayed}
//                     totalItemsCount={this.state.totalItems}
//                     itemsCountPerPage={totalPages}
//                     activePage={this.state.currentPageNumber}
//                     onChange={this.handleSelect.bind(this)}
//                 />
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Pagination_Comp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
        };
    }

    // loadCommentsFromServer() {
    //     //     $.ajax({
    //     //         url: this.props.url,
    //     //         data: { limit: this.props.perPage, offset: this.state.offset },
    //     //         dataType: 'json',
    //     //         type: 'GET',
    //     //
    //     //         success: data => {
    //     //             this.setState({
    //     //                 data: data.comments,
    //     //                 pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
    //     //             });
    //     //         },
    //     //
    //     //         error: (xhr, status, err) => {
    //     //             console.error(this.props.url, status, err.toString()); // eslint-disable-line
    //     //         },
    //     //     });
    //     // }

    // componentDidMount() {
    //     this.loadCommentsFromServer();
    // }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        // this.setState({ offset: offset }, () => {
        //     this.loadCommentsFromServer();
        // });
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
                    marginPagesDisplayed={1}
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