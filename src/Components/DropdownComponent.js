import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

export default class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


  render() {
    return (
      <div>
        <InputGroup>
          
          <InputGroupButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Date Range
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>1 Month</DropdownItem>
              <DropdownItem>3 Months</DropdownItem>
              <DropdownItem>6 Months</DropdownItem>
              <DropdownItem>YTD</DropdownItem>
              <DropdownItem>1 Year</DropdownItem>
              <DropdownItem>2 Years</DropdownItem>
              <DropdownItem>5 Years</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>
    );
  }
}