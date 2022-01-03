import React from "react";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";
import NewPlace from "./places/pages/NewPlace";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeElement />} />
          <Route path="users" element={<Users />} />
          <Route path=":uid/places" element={<Users />} />
          <Route path="places" element={<Places />} />
        </Route>
        <Route path="/places/new" element={<NewPlace />} />
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
  return (
    <div>
      <h2>Home Element</h2>
      <Link to="/users">Users</Link> | <Link to="/places">Places</Link>
    </div>
  );
}

export default App;
