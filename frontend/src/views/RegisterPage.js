import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterPage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </>
  );
}

export default RegisterPage;
