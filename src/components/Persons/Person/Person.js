import React, {Component} from 'react';
import styled from 'styled-components';

import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
    render(){
        console.log('[Person.js] renderng...');
    
        return (
            <Aux>
                <p>I'm {this.props.name}. I am {this.props.age} years old.</p>
                <p>{ this.props.children }</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);