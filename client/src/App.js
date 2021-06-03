import React from "react";
import save from "./pages/save";
import search from "./pages/search";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App(){
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={search} />
        <Route exact path="/search" component={search} />
        <Route exact path="/save" component={save} />
      </Switch>
    </div>
   </Router>
  );
}
export default App;
