import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch, } from 'react-router-dom';
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from './components/HeaderComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import UpdateTaskComponent from './components/UpdateTaskComponent';
import Login from './components/LoginComponent'
import { createBrowserHistory } from 'history';



function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            
          <Switch> 
          
            <Route path="/"  exact component={ListTaskComponent}></Route>
            <Route path="/tasks" component={ListTaskComponent}></Route>
            <Route path = "/add-task" component={CreateTaskComponent}></Route>
            <Route path = "/update-task/:taskid" component={UpdateTaskComponent}></Route>
            <Route path = "/Login" component={Login}></Route>
            
            
          </Switch>
          
             

        </div>
      </Router>
    </div>
  );

}

export default App;