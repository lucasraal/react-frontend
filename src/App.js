import React from "react";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeElement />} />
          <Route path="users" element={<Users />} />
          <Route path="places" element={<Places />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>APP JS</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/places">Places</Link>
      </nav>
      <Outlet />
      <h5>Add bottom component here</h5>
    </div>
  );
}

function HomeElement() {
  return <h2>Home Element</h2>;
}

export default App;
