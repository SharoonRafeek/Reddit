import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login" exact component={Login}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
