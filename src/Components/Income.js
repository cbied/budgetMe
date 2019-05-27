import React, { Component } from 'react'
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class PayCheck extends Component {
constructor(props) {
super(props)
this.state = {
    date: '',
    amount: 0,
    category: '',
    btnDropright: false,
    categories: [ 'Paycheck', 'Gift', 'Side hustle', 'Credit card rewards', 'Dividends', 'Misc.', 'Bank Account']
}

this.handleOnChange = this.handleOnChange.bind(this)
this.updateList = this.updateList.bind(this)
this.select = this.select.bind(this)
}

    handleOnChange(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
}

    updateList(e) {
        const { date, amount, category } = this.state;
        const listItem = {
            date,
            amount,
            category
        }
        this.props.updateList(listItem,e,amount)
        this.setState({ date: '', amount: 0, category: ''})
    }

    select(event) {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        category: event.target.innerText
        });
    }
    render() {
    let { date, amount, category, categories } = this.state;
    return (
        <form className="expenseForm">
            <h3>Income</h3>
            <div>
                <h6>Date</h6>
                <input value={date} className='input' type='date' name='date' onChange={this.handleOnChange}/>
            </div>
            <div>
                <h6>Amount</h6>
                <input value={amount} className='input' type='number' name='amount' onChange={this.handleOnChange}/>
            </div>
            {/* <div>
                <h6>Category</h6>
                <input value={category} className='input' type='text' name='category' onChange={this.handleOnChange}/>
            </div> */}
            <div className="category">
            <h6>Category</h6>
            <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                <DropdownToggle caret>
                    {category}
                </DropdownToggle>
                <DropdownMenu>
                    {categories.map(category=>
                    <DropdownItem onClick={this.select} value={category} name='category' onChange={this.handleOnChange}>{category}</DropdownItem>
                    )}
                    
                </DropdownMenu>
            </Dropdown>
            </div>
            <br/>
            <Button outline color="success" type="submit"
            onClick={this.updateList}>Add Paycheck</Button>

        </form>
            ) 
    }
        
    
}

export default PayCheck
