import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarea extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.tarea.done ? 'gray' : 'black', //Si done esta en false sera 'gray', caso contrario 'black'
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {tarea} = this.props;
        return <div style={this.styleCompleted()}>
            {tarea.title} - 
            {tarea.description} - 
            {tarea.done} - 
            {tarea.id}
            <input type='checkbox' onChange={this.props.checkDone.bind(this, tarea.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, tarea.id)}>
                x
            </button>
        </div>
    }
}

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Tarea;