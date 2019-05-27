import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios'
import trash_can from '../trash_can.svg'


class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }


render() {
  let { list } = this.props
  return (
    <Table dark>
    <thead>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Amount</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item,index) => {
        return (
          <tr key={index}>
            <td>{item.expense.date}</td>
            <td>{item.expense.item}</td>
            <td>{item.expense.amount}</td>
            <td>{item.expense.category}</td>
            <td><img src={trash_can} alt="trash can (delete)"
            onClick={() => {axios
              .delete(`/api/expenses/${item.expense.id}`)
              .then(response => {
                this.props.deleteItem(response.data,item.expense.amount,index);
              })}}
            /></td>
          </tr>
        )
    })}
    </tbody>
    
  </Table>
)
}
  
}

export default Info
