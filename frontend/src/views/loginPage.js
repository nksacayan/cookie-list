import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";

function LoginPage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>

      <Nav>
        <Nav.Item>
          <Nav.Link href="/register">Make an account!</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default LoginPage;
