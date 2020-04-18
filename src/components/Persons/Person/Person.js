import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
    render(){
        console.log('[Person.js] renderng...');
    
        return (
            <Aux>
                <p>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{ this.props.children }</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);