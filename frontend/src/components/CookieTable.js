import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState, useEffect } from "react";

function CookieTable() {
  const [cookies, setCookies] = useState([]);
  useEffect(() => {
    fetch("/api/cookie")
      .then((response) => response.json())
      .then((data) => setCookies(data));
  }, [cookies]);

  const [newCookieName, setNewCookieName] = useState();

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
        <Form>
          <Form.Group className="mb-3" controlId="newCookieNameField">
            <Form.Control
              type="text"
              placeholder="Oreo"
              value={newCookieName}
              onInput={(e) => setNewCookieName(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button onClick={() => CreateCookie(newCookieName)}>
          Create New Cookie
        </Button>
      </Container>
    </>
  );
}

function CookieList({ cookies }) {
  const sortedList = cookies.map((cookie) => cookie).sort(CompareCookieScore);
  const listItems = sortedList.map((cookie, index) => (
    <tr key={cookie.id}>
      <td>{index + 1}</td>
      <td>{cookie.name}</td>
      <td>{cookie.score}</td>
      <td>
        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => AddScore(cookie.name, cookie.score + 1)}
          >
            Upvote
          </Button>
          <Button
            variant="secondary"
            onClick={() => AddScore(cookie.name, cookie.score - 1)}
          >
            Downvote
          </Button>
          <Button variant="secondary" onClick={() => DeleteCookie(cookie.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{listItems}</>;
}

// Adds number score to name cookie. Can take a negative number
function AddScore(name, score) {
  fetch(`/api/cookie/${name}/score-${score}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Deletes cookies by id
function DeleteCookie(id) {
  fetch(`/api/cookie/id-${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function CreateCookie(name) {
  fetch(`/api/cookie/${name}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Sort used to order cookie table
function CompareCookieScore(a, b) {
  if (a.score < b.score) return 1;
  if (b.score < a.score) return -1;

  return 0;
}

export default CookieTable;
