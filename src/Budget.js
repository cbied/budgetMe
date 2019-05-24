import React, { Component } from 'react'
import Info from './Components/Info'
import AppRouter from './Components/AppRouter'
import ToggleEandP from './Components/ToggleEandP'
import Expenses from './Components/Expenses'
import PayCheck from './Components/PayCheck'
import axios from 'axios'

class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'expense',
      list: [],
      id: 1,
      error: ''
    }
    this.toggleView = this.toggleView.bind(this)
    this.updateList = this.updateList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  toggleView(view) {
    this.setState({ view: view })
  }


  componentDidMount = () => {
    axios
      .get('/api/expenses')
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: 'An error occurred' });
      });
  }

  // fix id to increment by one
  updateList(item, e) {
    
    let { id } = this.state;
    item.id = id++
    e.preventDefault();
        axios
        .post("/api/expenses", {
            expense: item
        })
        .then(response => {
          this.setState({ list: response.data, id: id})
            
        })
        .catch(error => { 
            console.log(error);
        });
    
     
    
  }

  deleteItem(newList) {
    this.setState({ list: newList })
  }

  render() {
    let { view, list, id } = this.state
    return (
      <div>
        <AppRouter />
        <main className='budgetStyle'>
          <aside className='toggleInputs'>
          <ToggleEandP 
          toggleView={this.toggleView}
          />

        {view=== 'expense' ? 
        ( <Expenses 
          updateList={this.updateList}
          list={list}/> ) : 
        view === 'paycheck' ?  
        ( <PayCheck 
          updateList={this.updateList}
          list={list}/> ) : 
        null}

        </aside>
        <div className='info'>

          <Info 
          list={list}
          id={id}
          deleteItem={this.deleteItem}
          />
        </div>
      </main>
      </div>
      
    )
  }
}

export default Budget
