import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLinkClick = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav>
        <a href="#Home"><Logo /></a>

        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "active" : ""}
          >
            <li><a href="#Home" onClick={(e) => this.handleLinkClick(e, "#Home")}>Home</a></li>
            <li><a href="#About" onClick={(e) => this.handleLinkClick(e, "#About")}>Sobre</a></li>
            <li><a href="#Products" onClick={(e) => this.handleLinkClick(e, "#Products")}>Produtos</a></li>
            <li><a href="#Team" onClick={(e) => this.handleLinkClick(e, "#Team")}>Equipe</a></li>
          </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
