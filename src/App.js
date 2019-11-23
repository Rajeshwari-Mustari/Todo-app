import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import TaskBar from "./components/taskbar/taskBar";
import TaskList from "./components/tasklist/taskList";

function App() {
  return (
      <div className="App">
        <Header/>
        <TaskBar/>
        <TaskList/>
      </div>
  );
}

export default App;