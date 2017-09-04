import React, { Component } from "react";
import "./content-style.css";
import Header from "./Header/header.js";
import AddButton from "./Add-Button/addButton.js";
import Form from "./Form/addInvoiceForm.js";
import Invoice from "./Invoice/invoice.js"; 


let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

class Content extends Component {
    
    constructor (props) {
        super(props);
        this.handleNewInvoiceAdd = this.handleNewInvoiceAdd.bind(this);
        this.state = {
            InvoiceArray: [
                {
                    costDate: day + "/" + month + "/" + year,
                    purpose: "used for emphasis with a following adjective functioning as an adverb.",
                    total: 123,
                    targetGroup: "car",
                    settings: "aaaa",
                }
            ]
        }
    }

    handleSendingData (event){
        
    }

    handleNewInvoiceAdd (event){
        event.preventDefault();
        let newLine = [{
                    costDate: year + "." + month +"." + day, 
                    purpose: "gfaisyfugais", 
                    total: 333,
                    targetGroup: "home",
                    settings: 3232,
                }];
        let newState = [...this.state.InvoiceArray, ...newLine];
        console.log(this.state.InvoiceArray, newState);
        this.setState({InvoiceArray: newState});
    }

    render () {
        return (
            <div className="content" handleSendingData={this.handleSendingData}>
                <Header /> 
                <Invoice  InvoiceArray={this.state.InvoiceArray}/>
                <AddButton handleNewInvoiceAdd={this.handleNewInvoiceAdd} />
                <Form />
            </div>
        );
    }
}

export default Content;