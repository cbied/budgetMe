import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Info extends Component {
  render() {
    return (
         <Table dark>
        <thead>
          <tr>
            <th>Item #</th>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    )
  }
}

export default Info
