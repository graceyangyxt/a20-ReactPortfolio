import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Webdev from "./pages/Webdev";
import Webdes from "./pages/Webdes";
import Arvr from "./pages/Arvr";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/web development" component={Webdev} />
           <Route exact path="/web design" component={Webdes} />
           <Route exact path="/ARVR" component={Arvr} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;