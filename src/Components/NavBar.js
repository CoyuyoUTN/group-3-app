import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-nav">
      <Navbar bg="blue" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>G&&G</Navbar.Brand>
          </Link>
          <Link to="products">
            <Navbar.Brand>Products</Navbar.Brand>
          </Link>
          <Link to="/category/jewelery">
            <Navbar.Brand>Jewelery</Navbar.Brand>
          </Link>
          <Link to="/category/electronics">
            <Navbar.Brand>Electronics</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <CartWidget />
    </div>
  );
};

export default NavBar;
