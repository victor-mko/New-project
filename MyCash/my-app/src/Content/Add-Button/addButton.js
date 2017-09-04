import React, { Component } from "react";
import "./addButton-style.css";

class AddButton extends Component {
    render () {
        return (
            <div>
                <a href="#" className="add-button" onClick={this.props.handleNewInvoiceAdd}>
                    +
                </a>
            </div>
        );
    }
}

export default AddButton;