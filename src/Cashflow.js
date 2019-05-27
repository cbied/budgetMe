import React, { Component } from 'react'
import Info from './Components/Info'
import AppRouter from './Components/AppRouter'
import ToggleEandP from './Components/ToggleEandP'
import Expenses from './Components/Expenses'
import Income from './Components/Income'
import Footer from './Components/Footer'
import axios from 'axios'

class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'expense',
      list: [],
      id: 1,
      total: [],
      totalAmt: 0,
      error: ''
    }
    this.toggleView = this.toggleView.bind(this)
    this.updateList = this.updateList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  toggleView(view) {
    this.setState({ view: view })
  }

// fix total on componentDidMount
  componentDidMount = () => {
    let { totalAmt } = this.state
    axios
      .get('/api/expenses')
      .then(response => {
        this.setState({ list: response.data, totalAmt: totalAmt });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: 'An error occurred' });
      });

  }

  updateList(item, e) {
    
    let { id, total, totalAmt } = this.state;
    item.id = id++
    total.push(item.amount)
    totalAmt = total.reduce((a,b) => +a + +b)

    e.preventDefault();
        axios
        .post("/api/expenses", {
            expense: item
        })
        .then(response => {
          this.setState({ list: response.data, id: id, totalAmt: totalAmt})
            
        })
        .catch(error => { 
          console.log(error);
          this.setState({ error: 'An error occurred' });
        });
  }

  deleteItem(newList,itemAmount,index) {
    let { totalAmt, total } = this.state
    total.splice(index,1)
    let newTotal = +totalAmt - +itemAmount
    this.setState({ list: newList, totalAmt: newTotal })
  
  }

  render() {
    let { view, list, id } = this.state
    return (
      <div>
        {/* pass down list */}
        <AppRouter 
        list={list}
        />
        <div className='cashflowStyle'>
          <aside className='toggleInputs'>
          <ToggleEandP 
          toggleView={this.toggleView}
          />

        {view=== 'expense' ? 
        ( <Expenses 
          updateList={this.updateList}
          list={list}/> ) : 
        view === 'paycheck' ?  
        ( <Income 
          updateList={this.updateList}
          list={list}/> ) : 
        null}

        </aside>
        <div className='total'>
          <h4>Cash:</h4>
          <h4>{this.state.totalAmt}</h4>
        </div>
        <div className='info'>

          <Info 
          list={list}
          id={id}
          deleteItem={this.deleteItem}
          />
        </div>
        
      </div>

      <Footer />
      </div>
    )
  }
}

export default Budget
