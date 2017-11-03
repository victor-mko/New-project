import React, { Component } from "react";
import "./cost-item-style.css";

class CostItem extends Component {

    render () {
        let { date, what, cost, expensesType } = this.props.invoiceArray;
        return (
            <tr className="cost-item">
                <td className="date">{date}</td>
                <td className="what">{what}</td>
                <td className="total">{cost}$</td>
                <td className="target-group">{expensesType}</td>
                <td className="settings">settings</td>
            </tr>
        );
    }
}

export default CostItem;