import React, { Component } from 'react'

export class Planned extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {

        this.setState({ [e.target.name]: e.target.value, total: +e.target.value + e.target.value })
        console.log(e.target.value)
    }

    render() {
       
        return (
            <div>
                <td>
                <input type="text" className="budgetInputs" name="planned"
                onChange={this.handleOnChange}
                disabled={this.props.allowEdit === "false"}/>
                </td>
            </div>
        )
    }
}

export default Planned
