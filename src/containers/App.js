import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons:[
      { name: 'Jakaria', age: 24 },
      { name: 'Golam Rabbi', age: 26 },
      { name: 'Parvez', age: 22 },
    ],
    showPersons: false
  }
  switchName = () => {
    // console.log('clicked!!!!');
    this.setState( { persons:[
      { name: 'Jakaria Istauk', age: 24 },
      { name: 'Golam Rabbi', age: 26 },
      { name: 'Parvez', age: 22 },
    ] })
  }

  nameChange = (event) => {
    this.setState( { persons:[
      { name: 'Jakaria Istauk', age: 24 },
      { name: event.target.value, age: 26 },
      { name: 'Parvez', age: 22 },
    ] })
  }

  deletePerson = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState( {persons: persons} )
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if( this.state.showPersons ){
     persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePerson}
          />;
    }    

    return (
        <div className={classes.App}>
          <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          clicked={this.togglePersons}/>
         {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React !!!!'));
  }
}

export default App;
