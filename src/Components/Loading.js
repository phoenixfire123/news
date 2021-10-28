import React, { Component } from 'react'
import Spinner from './Spinner.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="text-center container my-5">
                <img src={Spinner} alt="Loading"></img>
            </div>
        )
    }
}

export default Loading
