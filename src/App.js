import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Users from "./user/pages/Users";
import Places from "./places/pages/Places";
import NewPlace from "./places/pages/NewPlace";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

// <main> css is on </main>src/shared/components/Navigation/MainHeader.css

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeElement />} />
            <Route path="users" element={<Users />} />
            <Route path=":uid/places" element={<Places />} />
            <Route path="places" element={<Places />} />
          </Route>
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <h1>APP JS</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/places">Places</Link>
      </nav>
      <Outlet />
      <h5>Add bottom component here</h5>
    </>
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
