import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark">
        <Container>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
