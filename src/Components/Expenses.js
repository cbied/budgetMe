import React from 'react';
import { Button } from 'reactstrap';

function Expenses(props) {
  
        return (
            <form className="expenseForm">
                <h3>Expenses</h3>
                <div>
                    <h6>Date</h6>
                    <input className='input' type='date'/>
                </div>
                <div>
                    <h6>Item</h6>
                    <input className='input' type='text'/>
                </div>
                <div>
                    <h6>Amount</h6>
                    <input className='input' type='number'/>
                </div>
                <div>
                    <h6>Category</h6>
                    <input className='input' type='text'/>
                </div>
                <br/>
                <Button outline color="danger">Add Expense</Button>
            </form>
        )
    
}

export default Expenses
