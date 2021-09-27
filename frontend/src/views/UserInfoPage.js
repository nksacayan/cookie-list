import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function UserInfoPage() {
  const [user, setUser] = useState({ name: "name", email: "email" });

  return (
    <>
      <h1>This is the user info page</h1>
      <h2>Name: {user.name}</h2>
      <h2>Name: {user.email}</h2>
      <Button
        onClick={() => {
          fetch("/api", {
            method: "GET",
          }).then((response) => console.log(response));
        }}
      >
        Get User
      </Button>
    </>
  );
}

export default UserInfoPage;
