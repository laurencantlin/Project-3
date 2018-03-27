import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Decks from "./pages/Decks";
import Questions from "./pages/Questions";
import PracticeSetup from "./pages/PracticeSetup";
import PracticeSession from "./pages/PracticeSession";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import "./App.css";


const App = () =>
  <Router>
    <div className="screenview">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Decks} />
        <Route exact path="/decks" component={Decks} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/questions/:deckname" component={Questions} />

        <Route exact path="/practicesetup" component={PracticeSetup} />
        <Route exact path="/practicesession" component={PracticeSession} />

        {/* <Route exact path="/books" component={Books} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
