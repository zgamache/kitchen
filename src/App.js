import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Main, Example } from './screens'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">Create React App Example</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Main} />
        <Route path="/example" component={Example} />
      </div>
    </Router>
  );
}

export default BasicExample;
