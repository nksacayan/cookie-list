import Navbar from "./components/Navbar";

import Container from "react-bootstrap/Container";

import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
