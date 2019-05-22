import React from 'react'
import { Button } from 'reactstrap';
import axios from 'axios'

function PayCheck(props) {
    
        return (
            <form className="expenseForm"
            onSubmit={e => {
                e.preventDefault();
                axios
                  .post("/api/list", {
                    list: props.list
                  })
                  .then(response => {
                    console.log(response.data);
                    // we need to do something here
                    this.props.changeView("wishes");
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}>
                <h3>Paycheck</h3>
                <div>
                    <h6>Date</h6>
                    <input className='input' type='date'/>
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
                <Button outline color="success">Add Paycheck</Button>
            </form>
        )
    
}

export default PayCheck
