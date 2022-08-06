import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
const App =()=>{
return(
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/movie/:id"><SingleMovie/></Route>
          <Route path="*"><Error/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
