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
            <div className="form-invoice-add">
                <div className="form-box">
                    <div className="form-header">
                        Invoice
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
                                <option>Food</option>
                                <option>Transit</option>
                                <option>Household chemicals</option>
                                <option>Clothing</option>
                                <option>Appliances</option>
                                <option>Entertainment</option>
                                <option>Car</option>
                                <option>Other</option>
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
                    <button onClick={this.props.handleSendingData}>
                        +
                    </button>
                </div>
            </div>  
        )
    }
}

export default Form;