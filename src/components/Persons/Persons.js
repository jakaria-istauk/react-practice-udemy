import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

  static getDrivenStateFromProps( props, state ){
    console.log('[Persons.js] getDrivenStateFromProps');
    return state;
  }

  // componentWillReceiveProps(props){
  //   console.log('[Person.js] componentWillReceiveProps', props);
    
  // }

  shouldComponentUpdate( nextProps, nextState ){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate( prevProps, prevState ){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' }
  }

  // componentWillUpdate(){

  // }

  componentDidUpdate( prevProps, prevState, snapshot ){
    console.log('[Persons.js ] componentDidUpdate');
    console.log( snapshot );
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
        return <Person 
        name={person.name} 
        age={person.age} 
        click={()=>this.props.clicked(index)}
        key={index}/>
      } ) };

  } 
  
export default Persons;