import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image: "https://www.w3schools.com/w3css/img_forest.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
