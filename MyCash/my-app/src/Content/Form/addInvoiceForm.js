import React, { Component } from "react";
import "./addInvoiceForm-style.css";


class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            costImputValue: "",
            textInputValue: "",
            formValues: {
                typeInvoice: "",
                dateInvoice: "",
                forWhatInvoice: "",
                costInvoice: "",
                whatInvoice: ""
            }
        };
        this.handleCostInputChange = this.handleCostInputChange.bind(this);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    } 


    handleCostInputChange (event) {
        let nnn = Object.assign({}, this.state.formValues, {costInvoice: event.target.value});
        this.setState({formValues: nnn});
        console.log(this.state.formValues);
    }

    handleTextInputChange (event) {
		this.setState({textInputValue: event.target.value});
    }

    render (){
        return (
            <div className={this.props.visible ? "form-invoice-add" : "hide"}>
                <div className="form-box">
                    <div className="form-header">
                        Invoice
                        <div className="closeFormButton" onClick={this.props.handleCloseOpenForm}>
                        X
                        </div>
                    </div>
                    <form action="">
                        <div className="type-invoice imput-box">
                            <i className=""></i>
                            <select className="typeInvoice">
                                <option>Expenses</option>
                                <option>Income</option>
                            </select>
                        </div>
                        <div className="date-invoice imput-box">
                            <i className=""></i>
                            <a href="" className="dateInvoice">19/08/2017</a>
                        </div>
                        <div className="for-what-invoice imput-box">
                            <i className=""></i>
                            <select className="forWhatInvoice">
                                <option value="Food">Food</option>
                                <option selected value="Transit">Transit</option>
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
                                value={this.state.formValues.costInvoice}
                                onChange={this.handleCostInputChange.bind(this)}
                                type="text"
                                className="costInvoice"
                            />
                        </div>
                        <div className="text-invoice imput-box">
                            <i className=""></i>
                            <input 
                                placeholder="What bought?"
                                value={this.state.textImputValue}
                                onChange={this.handleTextInputChange.bind(this)}
                                type="text"
                                className="whatInvoice"
                            />
                        </div>
                    </form>
                    <button onClick={this.props.handleNewInvoiceAdd}>
                        +
                    </button>
                </div>
            </div>  
        )
    }
}

export default Form;