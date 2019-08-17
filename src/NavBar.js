import React from 'react';
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom';

const NavBar = () => (
    <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
    </Nav.Link>
        </Nav.Item>
    </Nav>

);

export default NavBar;
