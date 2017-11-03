import React, { Component } from "react";
import "./header-style.css";
import "../../scss/fonts.css";
import AvatarDefault from "../../image/AvatarDefault.jpg";


class UserName extends Component {
    render () {
        return (
            <div className="user-name">
                <p id="userName" >User Name</p>
            </div>
        );
    }
}

class UserAvatar extends Component {
    render () {
        return (
            <div className="user-avatar">
                <img id="userAvatar" src={AvatarDefault} alt={"Viktor Mykhailenko"}/>
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