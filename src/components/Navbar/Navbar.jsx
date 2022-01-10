import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navigationbar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to="">
          <i class="bi bi-book fs-3"></i>
          <span className="fs-3"> MyBookApp</span>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/profile">
            <i class="bi bi-person fs-3 align-middle"></i>
            <span className="element-to-hide fs-5 align-middle"> Profile</span>
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <i class="bi bi-box-arrow-right fs-3 align-middle"></i>
            <span className="element-to-hide fs-5 align-middle"> Logout</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;