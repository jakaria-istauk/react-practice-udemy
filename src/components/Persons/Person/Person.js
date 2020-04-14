import React, {Component} from 'react';
import styled from 'styled-components';
import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js] renderng...');
    
        return (
            <div className={classes.Person} onClick={this.props.click}>
                <p>I'm {this.props.name}. I am {this.props.age} years old.</p>
                <p>{ this.props.children }</p>
            </div>
        )
    }
}

export default Person;