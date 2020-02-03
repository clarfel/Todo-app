import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      listTasks: []
    };
  }
  stateTask = e => {
    this.setState({ task: e.target.value });
  };
  setList = () => {
    const { task, listTasks } = this.state;
    this.setState({
      listTasks: listTasks.concat({ text: task, isComplete: false })
    });
  };
  completeTask = index => {
    const { task, listTasks } = this.state;

    this.setState({
      listTasks: listTasks.map((item, i) =>
        i === index
          ? { isComplete: !listTasks[i].isComplete, text: task }
          : item
      )
    });
  };
  removeTask = index => {
    this.setState({
      listTasks: this.state.listTasks.filter((item, i) => i !== index)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="main">
          <span className="title">
            <h1>To-Do App!</h1>
            <h3>Add New To-Do</h3>
          </span>
          <form className="js-form">
            <input
              autoFocus
              type="text"
              id="addTasks"
              aria-label="Enter a new todo item"
              placeholder="Enter new task"
              className="js-todo-input"
              onChange={e => this.stateTask(e)}
            />
          </form>
          <div>
            <button id="add" onClick={this.setList}>
              Add
            </button>
          </div>
        </div>
        <div className="tasks">
          <h2>Let's get some work done!</h2>
        </div>
        <hr />
        <div id="toDoList"></div>
        <main>
          <div className="container">
            <Todolist
              list={this.state.listTasks}
              remove={this.removeTask}
              done={this.completeTask}
            />
          </div>
        </main>
      </div>
    );
  }
}

// export default App;
