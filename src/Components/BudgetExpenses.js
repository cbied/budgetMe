import React, { Component } from 'react';
import Planned from '../Components/Planned'
import EditToggle from '../Components/EditToggle'
import { Table } from 'reactstrap';

class BudgetExpenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            planned: [0],
            amount: 0,
            categories: ['Food', 'Gifts', 'Health/medical', 'Rent/hotels','Transportation','Personal','Day trips','Utilities','Travel/flights','Coffee','Toiletries/Wash','Phone','Groceries','School','Subscriptions','Misc.']
        }
    }

    handleUpdate() {
        
    }

    handleDiff() {

    }

    render() {
        let { planned, amount, categories} = this.state
        let plannedTotal = planned.reduce((a,b) => +a + +b)
        return (
            <div>
            <Table bordered className="expensesTable">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Planned</th>
                    <th>Acutal</th>
                    <th>Diff.</th>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <td>Totals</td>
                    <td>{plannedTotal}</td>
                    <td>total actual</td>
                    <td>total diff</td>
                </tr>
                {categories.map((item,index) => {
                    return (
                        <tr key={index}>
                        <td>{item}</td>
                        <Planned allowEdit={this.state.allowEdit}/>
                        <td>{amount}</td>
                        <td>0</td>
                        </tr>
                    )
                })}
            
            </tbody>
        </Table>
        <EditToggle 
        update={this.updateEditStatus}
        />
        </div>
        )
    }
}

export default BudgetExpenses
