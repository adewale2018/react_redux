import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Tasks from "./components/Tasks";
import "./App.css";

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Tasks} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
