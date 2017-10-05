import React, { Component } from "react";
import "./addButton-style.css";

class AddButton extends Component {
    render () {
        return (
            <div>
                <button className="add-button" onClick={this.props.handleNewInvoiceAdd}>+</button>
            </div>
        );
    }
}

export default AddButton;