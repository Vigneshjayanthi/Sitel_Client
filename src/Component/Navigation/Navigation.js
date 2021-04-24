import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="large">
  <Navbar.Brand><Link to ='/'className="navbar-brand">Dummy Blog</Link></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="mr-auto">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/post" className="nav-link">Post</Link>
        <NavDropdown title="Contact us" className="dropdown">
        <NavDropdown.Item href="https://linkedin.com/">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item href="https://twitter.com/">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://facebook.com/">Facebook</NavDropdown.Item>
        <NavDropdown.Item href="https://instagram.com/">Instagram</NavDropdown.Item>
        </NavDropdown>
    </Nav>
  </Navbar.Collapse> 
</Navbar>
    

    )
}

export default Navigation;