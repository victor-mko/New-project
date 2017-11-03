import React, { Component } from "react";
import "./content-style.css";
import Header from "./Header/header.js";
import AddButton from "./Add-Button/addButton.js";
import Form from "./Form/addInvoiceForm.js";
import Invoice from "./Invoice/invoice.js";
import { connect } from "react-redux";


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }


    handleCloseOpenForm = () => {
        let newStateVisible = !this.state.visible;
        this.setState({
            visible: newStateVisible
        })
    }


    handleNewInvoiceAdd = (invoice) => {
        let newLine = [{
            type: invoice.type,
            date: invoice.date,
            expensesType: invoice.expensesType,
            cost: invoice.cost,
            what: invoice.what
        }];
        let newState = [...this.state.InvoiceArray, ...newLine];
        this.setState({ InvoiceArray: newState });
    }

    render() {
        return ( 
            <div className = "content">
            <Header />
            <Invoice InvoiceArray = { this.state.InvoiceArray } /> 
            <AddButton handleCloseOpenForm = { this.handleCloseOpenForm }/> 
            <Form 
                handleCloseOpenForm = { this.handleCloseOpenForm }
                visible = { this.state.visible }
                handleNewInvoiceAdd = { this.handleNewInvoiceAdd }
            /> 
            </div>
        );
    }
}

export default connect (
    state => ({
        InvoiseStore: state
    }),
    dispatch => ({

    })
)(Content);