import React, { Component } from 'react';

class GeekyShowDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Mazz",
            age: "25"
        };
        // this.onClickHandler = this.onClickHandler.bind(this);
    }
    // onClickHandler(){
    //     this.setState((state, props) => {
    //         console.log(props);            
    //     })  
    //     // console.log("CLicked", this);  
    // }
    // OR
    // state = {
    //     name : "Mazz",
    //     age : "25"
    // };
    // this.setState(function (state, props) {
    //     console.log(props);
    // });
    onClickHandler = age => {
        console.log(age);
        
    };

    // onClickArgs = () =>{
    //     this.onClickHandler(this.state.age);
    // } 
    render() {
        return (
            <div>
                <h1>Events</h1>
                {/*  Note : On functional component we doesnot have to write "this" 
                <button onClick={onClickHandler}>Click me!</button>
                */}
                <h3>Hello {this.state.name}, your age is {this.state.age}</h3>
                <button onClick={this.onClickHandler}>Click me!</button>
                {/* {/ <p>Watch the console</p> /} */}
            </div>
        )
    }
}

export default GeekyShowDemo;