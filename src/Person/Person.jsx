import React, { Component } from 'react'
import './Person.css'
import Radium from 'radium'

class Person extends Component {
    render() {
        const style={
            '@media (min-width : 500px)' : {
                width : '500px',
                background : "pink"
            }   
        }
        return (
            <div className="outer_div" style={style}>                
                <h3 onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} yrs old</h3>
                <input onChange = {this.props.changed} type="text" value={this.props.name}/>
            </div>
        )
    }
}

export default Radium(Person);