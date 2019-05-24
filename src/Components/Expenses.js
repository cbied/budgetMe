import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Expenses extends Component {
    constructor() {
        super() 
        this.state = {
            date: '',
            item: '',
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
        const { item, date, amount, category } = this.state;
        const listItem = {
            date,
            item,
            amount: -amount,
            category
        }
        this.props.updateList(listItem,e)
        // this.setState({ item: '', date: '', amount: '', category: '' })
    }

    render() {
        let { date, item, amount, category } = this.state
        return (
            <form className="expenseForm">
                <h3>Expenses</h3>
                <div>
                    <h6>Date</h6>
                    <input value={date} className='input' type='date' name='date' onChange={this.handleOnChange}/>
                </div>
                <div>
                    <h6>Item</h6>
                    <input value={item} className='input' type='text' name='item' onChange={this.handleOnChange}/>
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
                <Button outline color="danger"
                 onClick={this.updateList}>Add Expense</Button>
            </form>
        )
    }
}

export default Expenses



// function Expenses(props) {
  
//         return (
//             <form className="expenseForm"
//             onSubmit={e => {
//                 e.preventDefault();
//                 axios
//                   .post("/api/list", {
//                     list: props.list
//                   })
//                   .then(response => {
//                     console.log(response.data);
//                     // we need to do something here
                    
//                   })
//                   .catch(error => { 
//                     console.log(error);
//                   });
//               }}
//             >
//                 <h3>Expenses</h3>
//                 <div>
//                     <h6>Date</h6>
//                     <input className='input' type='date'/>
//                 </div>
//                 <div>
//                     <h6>Item</h6>
//                     <input className='input' type='text'/>
//                 </div>
//                 <div>
//                     <h6>Amount</h6>
//                     <input className='input' type='number'/>
//                 </div>
//                 <div>
//                     <h6>Category</h6>
//                     <input className='input' type='text'/>
//                 </div>
//                 <br/>
//                 <Button outline color="danger">Add Expense</Button>
//             </form>
//         )
    
// }

// export default Expenses


