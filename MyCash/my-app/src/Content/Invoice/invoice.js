import React, { Component } from "react";
import "./invoice-style.css";
import CostItem from "./cost-item.js";
import SearchAndFilter from "./Search-and-Filter/search-and-filter.js";


class Invoice extends Component {
    render () {
        return (
            <div className="invoice-block">
                <SearchAndFilter />
                <table > 
                    <tr className="invoice-header">
                        <th className="date">Date</th>
                        <th className="purpose">Purpose of payment</th>
                        <th className="total">Total</th>
                        <th className="target-group">Target group</th>
                        <th className="settings">Settings</th>
                    </tr>
                    {
                        this.props.InvoiceArray.map(( el, index) => {
                            return (
                                <CostItem InvoiceArray = {el}/>
                            );
                        })
                    }
                </table>
            </div>
        );
    }
}

export default Invoice;