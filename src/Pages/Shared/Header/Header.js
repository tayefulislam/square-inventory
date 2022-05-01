import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    console.log(user)

    const navigate = useNavigate()
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


                            {
                                user ? <> <Nav.Link as={Link} to="/manage-inventories"><span className='manu-style'>Manage Inventories</span></Nav.Link>

                                    <Nav.Link as={Link} to="/addnewitem"><span className='manu-style'>Add Item</span></Nav.Link>

                                    <Nav.Link as={Link} to="/myitems"><span className='manu-style'>My Items</span></Nav.Link></> : ''
                            }



                            {
                                user ? <button onClick={() => signOut(auth)} type="button" className="btn btn-outline-success">LogOut</button> : <button onClick={() => navigate('/login')} type="button" className="btn btn-outline-success">Login</button>
                            }






                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;