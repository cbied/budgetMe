import React, { Component } from 'react';
import EditToggle from '../Components/EditToggle'
import Planned from '../Components/Planned'
import { Table } from 'reactstrap';

class BudgetIncome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planned: [0],
            amount: 0,
            categories: [ 'Paycheck', 'Gift', 'Side hustle', 'Credit card rewards', 'Dividends', 'Misc.', 'Bank Account'],
            allowEdit: 'true'
        }

        this.updateEditStatus = this.updateEditStatus.bind(this)
    }

    updateEditStatus(val) {
        this.setState({ allowEdit: val })
      }

    // handlePlanned(category, e) {
    // e.preventDefault();
    //     axios
    //     .post(`/api/expenses${category}`, {
    //         expense: item
    //     })
    //     .then(response => {
    //         this.setState({ planned: response.data, id: id, totalAmt: totalAmt})
            
    //     })
    //     .catch(error => { 
    //         console.log(error);
    //         this.setState({ error: 'An error occurred' });
    //     });
        
    // }


    render() {
        let { planned, amount, categories} = this.state
        let plannedTotal = planned.reduce((a,b) => +a + +b)
        console.log(this.props.list)
        return (
        <div>
        
        <Table bordered className="incomeTable">
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

export default BudgetIncome
