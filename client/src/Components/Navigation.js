import { Container, Nav, Navbar } from "react-bootstrap";

export const Navigation = ({ loggedin, handleLogout }) => {
  return (
    <div>
      <Navbar  bg="dark" variant="dark">
        <Container>
        <h1 className="title">O B L I Q U E - A P P</h1>
          <Navbar.Brand href="/home" className='title'>O.A.</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav className="me-auto">

              <Nav.Link href="history">History</Nav.Link>
             
              
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
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
