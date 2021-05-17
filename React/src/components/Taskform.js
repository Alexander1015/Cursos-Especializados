import React, { Component } from 'react'

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = e => { //Evita utilizar el metodo bind y es mas claro
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Escribe una Tarea' 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br />
                <br />
                <textarea 
                    name='description'
                    placeholder='Escribe una descripcion de la tarea' 
                    onChange={this.onChange} 
                    value={this.state.description}>
                    </textarea>
                <input type='submit'/>
            </form>
        )
    }
}