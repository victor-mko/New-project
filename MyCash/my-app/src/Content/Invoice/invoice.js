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
                     <thead>
                    <tr className="invoice-header">
                        <th className="date">Date</th>
                        <th className="purpose">Purpose of payment</th>
                        <th className="total">Total</th>
                        <th className="target-group">Target group</th>
                        <th className="settings">Settings</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.InvoiceArray.map(( el, index) => {
                            return (
                                <CostItem InvoiceArray = {el}/>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Invoice;