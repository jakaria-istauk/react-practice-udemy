import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');    
  }

  state = {
    persons:[
      { name: 'Jakaria', age: 24 },
      { name: 'Golam Rabbi', age: 26 },
      { name: 'Parvez', age: 22 },
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');    
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate'); 
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
    console.log('[App.js] render');
    
    let persons = null;

    if( this.state.showPersons ){
     persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePerson}
          />;
    }    

    return (
        <div className={classes.App}>
          <button onClick={()=>{
            this.setState({ showCockpit: false });
          }}>Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit 
          title = {this.props.appTitle}
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          clicked={this.togglePersons}/> : null }
         {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React !!!!'));
  }
}

export default App;
