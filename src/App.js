import React from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import MyPortfolio from "./pages/MyPortfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/portfolio" component={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/myportfolio" component={MyPortfolio} />
          <Route exact path="/myportfolio" component={Contact} />
          
          
        </Wrapper>
       
      </div>
    </HashRouter>
  );
}

export default App;
