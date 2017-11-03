import React, { Component } from 'react';
import './page-nav-style.css';


class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: [
                {
                    iconClassName: "icon-invoice",
                    text: "Invoices"
                },
                {
                    iconClassName: "icon-discount-on-payment",
                    text: "Debts"
                },
                {
                    iconClassName: "icon-planning",
                    text: "Planned purchases"
                },
                {
                    iconClassName: "icon-stats",
                    text: "Reports"
                }
            ]
        }
    }
    render () {
        let pageLink = this.state.content.map((el, index) => {
                return (
                    <div className="page-link" key={index}>
                        <a href="" >
                            <i className={el.iconClassName}></i>
							{el.text}
						</a>
                    </div>	
				);
            }
        )
        return (
            <div className="page-lin-box">
                {pageLink}
            </div>
        );
    }
} 


class PageNav extends Component {
    render () {
        return (
            <div className="page-box">
                <Page />
            </div>
        );
    }
}

export default PageNav;