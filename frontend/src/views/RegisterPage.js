import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBackup, setPasswordBackup] = useState("");

  return (
    <>
      <Form>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordBackup}
            onInput={(e) => setPasswordBackup(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            let input =
              email + "\n" + username + "\n" + password + "\n" + passwordBackup;
            alert(input);
          }}
        >
          Register
        </Button>
      </Form>
    </>
  );
}

export default RegisterPage;
