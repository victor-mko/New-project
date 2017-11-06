import React, { Component } from "react";
import "./header-style.css";
import "../../scss/fonts.css";
import AvatarDefault from "../../image/AvatarDefault.jpg";


class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="user-name">
                    <p id="userName" >User Name</p>
                </div>
                <div className="user-avatar">
                    <img id="userAvatar" src={AvatarDefault} alt={"Viktor Mykhailenko"} />
                </div>
                <div className="settings">
                    <a href="">
                        <i className="icon-settings"></i>
                    </a>
                </div>
                <div className="logout">
                    <a href="">
                        <i className="icon-logout"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;