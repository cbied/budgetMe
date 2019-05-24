import React, { Component } from 'react'
import { Button } from 'reactstrap';
// update payCheck to reflect Expenses
class PayCheck extends Component {
constructor(props) {
  super(props)
  this.state = {
      date: '',
      amount: 0,
      category: ''
  }

  this.handleOnChange = this.handleOnChange.bind(this)
  this.updateList = this.updateList.bind(this)
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
      this.props.updateList(listItem,e)
}
    render() {
      let { date, amount, category } = this.state;
      return (
        <form className="expenseForm">
            <h3>Paycheck</h3>
            <div>
                <h6>Date</h6>
                <input value={date} className='input' type='date' name='date' onChange={this.handleOnChange}/>
            </div>
            <div>
                <h6>Amount</h6>
                <input value={amount} className='input' type='number' name='amount' onChange={this.handleOnChange}/>
            </div>
            <div>
                <h6>Category</h6>
                <input value={category} className='input' type='text' name='category' onChange={this.handleOnChange}/>
            </div>
            <br/>
            <Button outline color="success"
            onClick={this.updateList}>Add Paycheck</Button>
        </form>
            ) 
    }
        
    
}

export default PayCheck
