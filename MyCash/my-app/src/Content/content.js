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
        
        this.state = {
            InvoiceArray: [
                {
                    type: "car",
                    date: day + "/" + month + "/" + year,
                    cost: 123,
                    expensesType: "car",
                    what: "used for emphasis with a following adjective functioning as an adverb.",
                    settings: "aaaa",
                }
            ],
            visible: false
        };
        this.handleNewInvoiceAdd = this.handleNewInvoiceAdd.bind(this);
        this.handleCloseOpenForm = this.handleCloseOpenForm.bind(this);
    }


    handleCloseOpenForm () {
        let newStateVisible = !this.state.visible;
        this.setState({
            visible: newStateVisible
        })
    }


    handleNewInvoiceAdd (invoice){
        let newLine = [{
                type: invoice.type,
                date: invoice.date,
                expensesType: invoice.expensesType,
                cost: invoice.cost,
                what: invoice.what
            }];
        let newState = [...this.state.InvoiceArray, ...newLine];
        this.setState({InvoiceArray: newState});
    }

    render () {
        return (
            <div className="content" handleSendingData={this.handleSendingData}>
                <Header /> 
                <Invoice  InvoiceArray={this.state.InvoiceArray}/>
                <AddButton  handleCloseOpenForm={this.handleCloseOpenForm} />
                <Form handleCloseOpenForm={this.handleCloseOpenForm} visible={this.state.visible} handleNewInvoiceAdd={this.handleNewInvoiceAdd}/>
            </div>
        );
    }
}

export default Content;