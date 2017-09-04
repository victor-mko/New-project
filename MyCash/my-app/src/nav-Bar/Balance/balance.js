import React, { Component } from 'react';
import './balance-style.css';

class Balance extends Component {
    constructor (props) {
        super(props);
        this.state = {
            balanceValue: 1500
        }
    }
    render () {
        return (
            <div className="balance-box">
                <p><i className="icon-wallet"></i>{this.state.balanceValue}</p>
            </div>
        )
    };
}

export default Balance;