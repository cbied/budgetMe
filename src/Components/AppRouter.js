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
      <nav>
        <Router>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto">Menu</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar dark="true"  className="flex-row justify-content-around" justify="between">
                    <NavItem>
                      <Link to="/" target="_top" className="link">
                      <span>H</span>
                      <span>o</span>
                      <span>m</span>
                      <span>e</span></Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/Budget" target="_top" className="link">
                      <span>B</span>
                      <span>u</span>
                      <span>d</span>
                      <span>g</span>
                      <span>e</span>
                      <span>t</span></Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/Contact" target="_top" className="link">
                      <span>C</span><span>o</span>
                      <span>n</span>
                      <span>t</span>
                      <span>a</span>
                      <span>c</span>
                      <span>t</span>
                      <span></span>
                      <span>U</span>
                      <span>s</span></Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
          </Router>
        </nav>
    );
  }

}

export default AppRouter;