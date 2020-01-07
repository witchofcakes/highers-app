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
                <img onClick={this.clicked} id="icon" src={search_bl}/>
                <img onClick={this.normal} id="icon-close" src={close_icon}/>
            </form>
        );
    }
}