import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import React, { useState, useEffect } from "react";

function CookieTable() {
  const [cookies, setCookies] = useState([]);

  let sampleCookies = [
    { id: 1, name: "Oreo", score: 5 },
    { id: 2, name: "Lemon Crunch", score: -3 },
    { id: 3, name: "Thin Mint", score: 10000 },
  ];

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
            <CookieList cookies={sampleCookies} />
          </tbody>
        </Table>
      </Container>
    </>
  );
}

function CookieList({ cookies }) {
  const listItems = cookies.map((cookie) => (
    <tr>
      <td>{cookie.id}</td>
      <td>{cookie.name}</td>
      <td>{cookie.score}</td>
    </tr>
  ));
  return <>{listItems}</>;
}

export default CookieTable;
