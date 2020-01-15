import React from 'react';
import search_bl from '../images/search-black.svg';
import close_icon from '../images/close-icon.svg';

export default class Search_Top extends React.Component  {

    constructor(props) {
        super(props);
        this.normal = this.normal.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    normal() {
        var search = document.getElementById("search");
        var field = document.getElementById("field");
        var icon = document.getElementById("icon");
        var icon_close = document.getElementById("icon-close");
        search.classList.remove("open");
        field.removeAttribute("placeholder");
        icon.setAttribute('style', 'display: ' + 'inline');
        icon_close.setAttribute('style', 'display: ' + 'none');
    }

    clicked() {
        var search = document.getElementById("search");
        var field = document.getElementById("field");
        var icon = document.getElementById("icon");
        var icon_close = document.getElementById("icon-close");
        search.classList.add("open");
        field.setAttribute("placeholder", "Пошук");
        icon.setAttribute('style', 'display: ' + 'none');
        icon_close.setAttribute('style', 'display: ' + 'inline');
    }

    render() {

        return (
            <form id="search" autocomplete="off">
                <input id="field" type="text"/>
                <svg onClick={this.clicked} id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="feather-search-filter">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <svg onClick={this.normal} id="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather-x-filter">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </form>
        );
    }
}