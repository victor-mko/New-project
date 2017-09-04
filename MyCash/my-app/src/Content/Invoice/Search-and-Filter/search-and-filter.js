import React, { Component } from "react";
import "./search-and-filter-style.css";
import "../../../scss/fonts.css";
import Search from "./search/search.js";
import Filter from "./filter/filter.js";

class SearchAndFilter extends Component {
    render () {
        return (
            <div className="search-form">
                <Search />
                <Filter />
            </div>
        );
    }
}

export default SearchAndFilter;