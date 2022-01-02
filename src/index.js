import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="users" element={<Users />} />
        <Route path="places" element={<Places />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
