import React, { Component } from 'react'
import Info from './Components/Info'
import AppRouter from './Components/AppRouter'
import ToggleEandP from './Components/ToggleEandP'
import Expenses from './Components/Expenses'
import PayCheck from './Components/PayCheck'

class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'expense',
      list: []
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(view) {
    this.setState({ view: view })
  }

  updateList(item) {
    let { list } = this.state
    this.setState({ list: [...list, item] })
  }

  render() {
    let { view, list } = this.state
    return (
      <div>
        <AppRouter />
        <div className='budgetStyle'>
          <div className='toggleInputs'>
          <ToggleEandP 
          toggleView={this.toggleView}
          />

        {view=== 'expense' ? (
        <Expenses /> 
        ) 
        : 
         this.state.view === 'paycheck' ?  (
         <PayCheck list={list}/>
        ) : null}

        </div>
        <div className='info'>

          <Info />
        </div>
      </div>
      </div>
      
    )
  }
}

export default Budget
