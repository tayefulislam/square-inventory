import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <Navbar className='nav-bar' sticky='top' collapseOnSelect expand="lg"  >
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        Square Inventory
                        {/* <img height={30} src='' alt="" /> */}
                    </Navbar.Brand>



                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services"><span className='manu-style'>Services</span></Nav.Link>


                        </Nav>

                        <Nav>


                            <Nav.Link as={Link} to="/about"><span className='manu-style'>Services</span></Nav.Link>

                            <Nav.Link as={Link} to="/addservice"><span className='manu-style'>Services</span></Nav.Link>

                            <Nav.Link as={Link} to="/manage"><span className='manu-style'>Services</span></Nav.Link>



                            <button type="button" className="btn btn-outline-success">Success</button>






                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;