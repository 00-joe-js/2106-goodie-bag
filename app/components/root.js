import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import AllCandies from "./AllCandies";

const Home = () => {
  return (<main>
    <h1>Welcome to the Goodie Bag!</h1>
    <p>What a nice home page for your goodies!</p>
  </main>);
}

const FourOhFour = () => {
  return <h1>Why are you here?</h1>;
};

const Root = () => {
  return (
    <div>
      <nav>
        <h1>Goodie Bag</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/candies">Candies</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/candies" component={AllCandies} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  )
}

export default Root
