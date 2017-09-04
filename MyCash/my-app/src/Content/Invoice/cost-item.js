import React, { Component } from "react";
import "./cost-item-style.css";

class CostItem extends Component {

    render () {
        let { costDate, purpose, total, targetGroup, settings} = this.props.InvoiceArray;
        return (
            <tr className="cost-item">
                <td className="date">{costDate}</td>
                <td className="purpose">{purpose}</td>
                <td className="total">{total}$</td>
                <td className="target-group">{targetGroup}</td>
                <td className="settings">{settings}</td>
            </tr>
        );
    }
}

export default CostItem;