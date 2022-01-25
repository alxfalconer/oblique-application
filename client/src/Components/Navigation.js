import { Container, Nav, Navbar } from "react-bootstrap";

export const Navigation = ({ loggedin, handleLogout }) => {
  return (
    <div>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">O.A.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="deals">Search Games</Nav.Link> */}
              <Nav.Link href="gallery">Gallery</Nav.Link>
              {/* <Nav.Link href="alerts_page">ALL ALERTS</Nav.Link> */}
              <Nav.Link href="history">History</Nav.Link>
              <Nav.Link href="store">Store</Nav.Link>
              
            </Nav>
            <Nav>
              {loggedin ? (
                <>
                 <Nav.Link eventKey={2} href="profile">
                    Strategize
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                 
                </>
              ) : (
                <>
                   <Nav.Link eventKey={2} href="register">
                    Register
                  </Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
