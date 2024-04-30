import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
        <>
            {/* Hero */}
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} sticky="top" className="footerclr bg-body-tertiary pt-4 pb-4">
                    <Container>
                        <Navbar.Brand className='logo'>
                            <Link to="/">
                                <img src={require('../../img/asset 0.png')} alt="" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    AZEDW
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="phl justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <NavDropdown className='drp' title="Products" id={`offcanvasNavbarDropdown-expand-lg`}>
                                        <NavDropdown.Item as={Link} to="/blazerandsuit">Blazer & Suits</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/jodhpuri">Jodhpuri</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/indowestern">Indo Western</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/sherwani">Sherwani</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/kotikurta">Koti-Kurta</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-dark">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header
