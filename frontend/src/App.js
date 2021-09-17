import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
