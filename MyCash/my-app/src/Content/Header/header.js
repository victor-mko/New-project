import React, { Component } from "react";
import "./header-style.css";
import "../../scss/fonts.css";
import Avatar from "../../image/Avatar.jpg";


class UserName extends Component {
    render () {
        return (
            <div className="user-name">
                <p>Viktor Mihailenko</p>
            </div>
        );
    }
}

class UserAvatar extends Component {
    render () {
        return (
            <div className="user-avatar">
                <img src={Avatar} alt={"Viktor Mykhailenko"}/>
            </div>
        );
    }
}


class Settings extends Component {
    render () {
        return (
            <div className="settings">
                <a href="">
                    <i className="icon-settings"></i>
                </a>
            </div>
        );
    }
}

class Logout extends Component {
    render () {
        return (
            <div className="logout">
                <a href="">
                    <i className="icon-logout"></i>
                </a>
            </div>
        );
    }
}


class Header extends Component {
    render () {
        return (
            <div className="header">
                <UserName />
                <UserAvatar />
                <Settings />
                <Logout />
            </div>
        );
    }
}

export default Header;