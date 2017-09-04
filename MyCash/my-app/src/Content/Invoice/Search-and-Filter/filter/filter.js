import React, { Component } from "react";
import "./filter-style.css";
import "../../../../scss/fonts.css";

class Filter extends Component {
    render () {
        return ( 
            <div className="filter">
                <a href="">
                    <i className="icon-calendar"></i>
                </a>
                <select name="select">
                    <option value="value1" selected>All period</option> 
                    <option value="value2">Last month</option>
                    <option value="value3">Last week</option>
                    <option value="value3">Today</option>
                </select>
            </div>
        );
    }
}

export default Filter;