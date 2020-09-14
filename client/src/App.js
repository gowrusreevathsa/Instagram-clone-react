import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import SignUp from "./components/screens/SignUp";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/create" component={CreatePost} />
      </Router>
    </>
  );
}

export default App;
