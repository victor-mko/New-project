import React, { Component } from "react";
import "./addInvoiceForm-style.css";
import { connect } from "react-redux";

let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            invoice: {
                type: "",
                date: day + "/" + month + "/" + year,
                expensesType: "",
                cost: "",
                what: ""
            }
        };
    } 
    handleInvoiceTypeChange = (event) => {
        let newStateValue = Object.assign({}, this.state.invoice, {type: event.target.value});
        this.setState({invoice: newStateValue});
    }
    handleInvoiceDateChange = (event) => {
        let newStateValue = Object.assign({}, this.state.invoice, {date: event.target.value});
        this.setState({invoice: newStateValue});
    }
    handleWhatInputChange = (event) => {
		let newStateValue = Object.assign({}, this.state.invoice, {what: event.target.value});
        this.setState({invoice: newStateValue});
    }
    handleCostChange = (event) => {
        let newStateValue = Object.assign({}, this.state.invoice, {cost: event.target.value});
        this.setState({invoice: newStateValue});
    }
    handleExpensesTypeChange = (event) => {
        let newStateValue = Object.assign({}, this.state.invoice, {expensesType: event.target.value});
        this.setState({invoice: newStateValue});
    }
    handleSendingData = (event) => {
        event.preventDefault();
    }
    handleAddItems = (event) => {
        event.preventDefault();
        this.props.onAddItems(this.state.invoice);
        this.props.handleCloseOpenForm();
    }
    render (){
        return (
            <div className={this.props.visible ? "form-invoice-add" : "hide"}>
                <div className="form-box">
                    <div className="form-header">
                        Invoice
                        <div className="closeFormButton" onClick={this.props.handleCloseOpenForm}>
                            <span className="lt-br-line close-icon"></span>
                            <span className="lb-tr-line close-icon"></span>
                        </div>
                    </div>
                    <form action="">
                        <div className="type-invoice imput-box">
                            <i className=""></i>
                            <select value={this.state.invoice.type} onChange={this.handleTypeChange} className="typeInvoice">
                                <option>Expenses</option>
                                <option>Income</option>
                            </select>
                        </div>
                        <div className="date-invoice imput-box">
                            <i className=""></i>
                            <a href="" className="dateInvoice">{day + "/" + month + "/" + year}</a>
                        </div>
                        <div className="for-what-invoice imput-box">
                            <i className=""></i>
                            <select value={this.state.invoice.expensesType} onChange={this.handleExpensesTypeChange} className="forWhatInvoice">
                                <option value="Food">Food</option>
                                <option value="Transit">Transit</option>
                                <option value="Household chemicals">Household chemicals</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Car">Car</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="cost-invoice imput-box">
                            <i className=""></i>
                            <input 
                                placeholder="Enter the spent sum"
                                value={this.state.invoice.costInvoice}
                                onChange={this.handleCostChange}
                                type="text"
                                className="costInvoice"
                            />
                        </div>
                        <div className="text-invoice imput-box">
                            <i className=""></i>
                            <input 
                                placeholder="What bought?"
                                value={this.state.invoice.what}
                                onChange={this.handleWhatInputChange}
                                type="text"
                                className="whatInvoice"
                            />
                        </div>
                    </form>
                    <button onClick={this.handleAddItems}>
                        +
                    </button>
                </div>
            </div>  
        )
    }
}

export default connect(
    state => ({
        invoiceArray: state
    }),
    dispatch => ({
        onAddItems: (newInvoices) => {
            dispatch({ type: "ADD_INVOICES", payload: newInvoices});
        }
    })
)(Form);