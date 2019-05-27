import React from 'react';
import { Button } from 'reactstrap';

function ToggleEandP(props) {
    
        return (
            <div className="toggleButtons">
                <Button color="danger"
                onClick={() => props.toggleView('expense')}
                >Add Expense</Button>{' '}
                <Button color="success"
                onClick={() => props.toggleView('paycheck')}
                >Add Income</Button>{' '}
            </div>
        )
    
}

export default ToggleEandP
