import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import React, { useState, useEffect } from "react";

function CookieTable() {
  const [cookies, setCookies] = useState([]);
  useEffect(() => {
    fetch("/api/cookie")
      .then((response) => response.json())
      .then((data) => setCookies(data));
  });

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Cookie Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <CookieList cookies={cookies} />
          </tbody>
        </Table>
      </Container>
    </>
  );
}

function CookieList({ cookies }) {
  const listItems = cookies.map((cookie) => (
    <tr key={cookie.id}>
      <td>{cookie.id}</td>
      <td>{cookie.name}</td>
      <td>{cookie.score}</td>
    </tr>
  ));
  return <>{listItems}</>;
}

export default CookieTable;
