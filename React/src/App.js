import React, {Component} from 'react'; //<-No olvidar
//Instalar React-Router-Don: "npm i react-router-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import tasks from './sample/task.json';

//Componentes
import Principal from './components/Principal';
import TaskForm from "./components/Taskform";
import Posts from './components/Posts';

/*
function Helloworld(props) {
  return (
    <div id='hello'>
      <h3>
        {props.subtitle}
      </h3>
      {props.mytext}
    </div>
  );
}
*/

/*
class Helloworld extends React.Component {
  
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show) {
      return ( 
        <div id='hello'>
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
        )
    } else {
      return <h1>
          Aqui no hay elementos
          <button onClick={this.toggleShow}>
            Cambiar estado
          </button>
        </h1>
    }
  }
}
*/

//Atraves de una funcion flecha
//const App = () => <div>This is my component: <Helloworld/></div>

//Atraves de una clase
/*
class App extends React.Component {
  render() {
    return <div>This is my component: <Helloworld/></div>
  }
}
*/

//Atraves de una funcion JavaScript
/*
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext='Hello Alex' subtitle='loremp ispum'/>
      <Helloworld mytext='Hola Mundo' subtitle='component 2'/>
      <Helloworld mytext='Hello!' subtitle='fgsfgdjh'/>
    </div>
  );
}
*/

class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask] //Concatena algo nuevo en un nuevo arreglo
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(tasks => tasks.id !== id)
   this.setState({tasks: newTasks})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(tarea => {
      if(tarea.id === id)
      {
        tarea.done = !tarea.done
      }
      return tarea;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
        <Router>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/posts'>Posts</Link>
        <br /><br />
        <Route exact path='/' render={() => {
          return <div>
            <TaskForm addTask={this.addTask}/>
            <Principal 
              tasks={this.state.tasks} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route path='/posts' component={Posts} />
      </Router>
    </div>
  }
}

export default App;
