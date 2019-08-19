import React from 'react';
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom';

const NavBar = () => (
    <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
    </Nav>

);

export default NavBar;
