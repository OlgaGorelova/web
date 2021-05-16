import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-react app', done: false },
        { id: 1, title: 'Make a video about it', done: true },
        { id: 2, title: 'Create simple todo-app', done: false }
      ]
    }; 
  }
  1
2
3
4
5
componentDidMount() {
  let savedTasks = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
  if (savedTasks.length > 0) {
    this.setState({
      tasks: [...savedTasks]
    });
  }
}
  
  addTask = async (task) => {
    await this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    console.log(JSON.parse(localStorage.getItem('tasks')));
  };

  doneTask = async (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    await this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    console.log(JSON.parse(localStorage.getItem('tasks')));
  };

  deleteTask = async (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    await this.setState(state => {
      let { tasks } = state;
      tasks.splice(index, 1);
      return tasks;
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    console.log(JSON.parse(localStorage.getItem('tasks')));
  };


  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
        <TaskInput addTask={v => this.addTask(v)}></TaskInput>
      </div>
    );
  }
}

export default App;
