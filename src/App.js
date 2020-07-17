import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state = {
      persons : [
        {id:"1", name : "Max", age : 28},
        {id:"2", name : "Manu", age : 25},
        {id:"3", name : "Stephan", age : 18},
        {id:"4", name : "Deamo", age : 48}
      ],
      showPersons : true
  }
  
changehandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id === id
  })
  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person
  this.setState({persons:persons})
  
}
togglePersons =() =>{
  const show = this.state.showPersons;
  this.setState({showPersons:!show})
}

deleteHandler = (index)=>{
  const persons = [...this.state.persons];
  persons.splice(index, 1);
  this.setState({persons:persons})
}
render() {
  const btnStyle={
      background : "green",
      padding : "10px 20px",
      color: "white",
      border : "none",
      outline : "none",
      ':hover' : {
         background : "pink"
      }
  }
    let showP = '';
    if(this.state.showPersons){
      showP = <div>
      {this.state.persons.map((person, index) => {
        return <Person
        changed={(event)=>this.changehandler(event, person.id)}
        click = {()=>this.deleteHandler(index)}
        name={person.name}
        age = {person.age}
        key={person.id}>

        </Person>        
      })} 
      </div>
      btnStyle.background = "red"
      btnStyle[':hover'] = {
        background:"orange"
      }
    }else{
      showP = "";
    }

    // Add Dynamic Class Logic
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push("red");
    }

    if(this.state.persons.length <= 1){
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <React.Fragment>        
          <h1 className={classes.join(' ')}>React Demo</h1>
          <button style={btnStyle} onClick = {this.togglePersons}>Hide</button>
          { showP }
        </React.Fragment>
      </StyleRoot>
    )
  }
}
export default Radium(App);