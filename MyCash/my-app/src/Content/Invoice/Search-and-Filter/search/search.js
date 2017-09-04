import React, { Component } from "react";
import "./search-style.css";
import "../../../../scss/fonts.css";

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    handleInputChange (event) {
		this.setState({searchValue: event.target.value});
    }
    

    render () {
        return (
            <div className="search">
                <input
                    className="input-field" 
                    type="text" 
                    value={this.state.searchValue} 
                    onChange={this.handleInputChange.bind(this)} 
                    placeholder="Search..."
                />
                <button type="submit" className="button-image">
                </button>
            </div>
        );
    }
}

export default Search;