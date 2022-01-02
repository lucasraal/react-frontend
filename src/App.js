import React from "react";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>APP JS</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/places">Places</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
