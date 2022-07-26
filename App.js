import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Bookings from "./containers/Bookings/Bookings";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
