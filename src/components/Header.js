import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar--custom">
                <NavLink className="navbar-brand" to="/">
          <span className="logo">
            VLADUT 
            MURESAN
          </span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="toggle-buttton"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact to="/about" className="navbar--custom__link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/showcase" className="navbar--custom__link">
                                Showcase
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" className="navbar--custom__link">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.github.com/vladmuresan02" className="navbar--custom__link">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
