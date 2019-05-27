import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';


class Expenses extends Component {
    constructor() {
        super() 
        this.state = {
            date: '',
            item: '',
            amount: 0,
            category: '',
            btnDropright: false,
            categories: ['Food', 'Gifts', 'Health/medical', 'Rent/hotels','Transportation','Personal','Day trips','Utilities','Travel/flights','Coffee','Toiletries/Wash','Phone','Groceries','School','Subscriptions','Misc.']
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
        const { item, date, amount, category } = this.state;
        const listItem = {
            date,
            item,
            amount: -amount,
            category
        }
        console.log(e)
        this.props.updateList(listItem,e)
        this.setState({ item: '', date: '', amount: '', category: '' })
    }

    select(event) {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        category: event.target.innerText
        });
    }

    render() {
        let { date, item, amount, category, categories } = this.state
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
                <Button outline color="danger" type="submit"
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


