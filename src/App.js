import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./crud_comp/crud_pages/Home";
import About from "./crud_comp/crud_pages/About";
import Contact from "./crud_comp/crud_pages/Contact";
import Navbar from "./crud_comp/layout/Navbar";
import AddUsers from "./crud_comp/users/AddUsers";
import EditUser from "./crud_comp/users/EditUser";
import ViewUserData from "./crud_comp/users/ViewUserData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/users/add" exact component={AddUsers} />
          <Route path="/users/edit/:id" exact component={EditUser} />
          <Route path="/users/:id" exact component={ViewUserData} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
