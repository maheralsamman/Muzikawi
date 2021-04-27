import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Podcast from "./components/Podcast";
import Footer from "./components/Footer";
import "./App.css";

//Pages
import studio from "./pages/studio";
import home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <home />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/studio" component={studio} />
          </Switch>
        </div>

        <Podcast />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
