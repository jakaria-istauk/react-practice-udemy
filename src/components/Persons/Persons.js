import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map( (person, index) => {
        return <Person 
        name={person.name} 
        age={person.age} 
        click={()=>props.clicked(index)}
        key={index}/>
      } ) };

export default persons;