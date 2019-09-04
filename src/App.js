import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="appWrapper_content">
          <Route path="/dialogs" component={Dialogs}></Route>
          <Route path="/profile" component={Profile}></Route>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
