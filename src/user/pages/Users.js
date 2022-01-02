import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
