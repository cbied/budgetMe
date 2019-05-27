import React from 'react'
import AppRouter from './Components/AppRouter'
import BudgetExpenses from './Components/BudgetExpenses'
import BudgetIncome from './Components/BudgetIncome'
import Footer from './Components/Footer'

function Budget(props) {
    console.log(props.list)
        return (
            <div>
                <AppRouter />
                <div className="budgetLayout">
                    <BudgetExpenses 
                    list={props.list}
                    />
                    <div id="overlay">
                        <h1>under construction</h1>
                    </div>
                    
                    <BudgetIncome 
                    list={props.list}
                    />
                </div>
                
                <Footer />
            </div>
        )
}

export default Budget