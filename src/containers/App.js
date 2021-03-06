import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');    
  }

  state = {
    persons:[
      { id: 'f00', name: 'Jakaria', age: 24 },
      { id: 'j01', name: 'Golam Rabbi', age: 26 },
      { id: 'k02', name: 'Parvez', age: 22 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState, props) => {
      return{ 
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 }
    });
  };

  deletePerson = PersonIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    
    let persons = null;

    if( this.state.showPersons ){
     persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePerson}
            changed = {this.nameChange}
            isAuthenticated={this.state.authenticated}
          />;
    }    

    return (
        <Aux>
          <button onClick={()=>{
            this.setState({ showCockpit: false });
          }}>Remove Cockpit</button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
              }} 
          >
            {this.state.showCockpit ? ( 
            <Cockpit 
            title = {this.props.appTitle}
            persons={this.state.persons} 
            showPersons={this.state.showPersons} 
            personsLength={this.state.persons.length}
            clicked={this.togglePersons}
            /> ) : null }
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React !!!!'));
  }
}

export default withClass(App, classes.App);
