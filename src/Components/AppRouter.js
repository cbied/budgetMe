import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';




class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  
  render () {
    return (
    <Router>
      <nav>
        <Navbar color="dark" dark>
            <NavbarBrand href="/" className="mr-auto">Menu</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar dark="true">
                <NavItem>
                  <Link to="/" target="_top">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Budget" target="_top">Budget</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Contact" target="_top">Contact Us</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </nav>
      </Router>
    );
  }

}

export default AppRouter;