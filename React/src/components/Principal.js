import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tarea from './Tarea';

class Principal extends Component {
    render() {
        return  this.props.tasks.map(tarea => 
        <Tarea 
            tarea={tarea} 
            key={tarea.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />) 
    }
}

Principal.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Principal;