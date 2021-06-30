import React from "react";
// import {Link} from "react-router-dom";
import {Navbar, Nav } from 'react-bootstrap';
import "./style.css";

function Navbars(){
    return(
        <div>
            <Navbar.Brand className="justify-content-center" href="/">XIAOTONG YANG</Navbar.Brand>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                <Nav.Link href="/web development">WEB DEVELOPMENT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/web design">WEB DESIGN & UI/UX</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/ARVR">AR & VR</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
 
        /* <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                    <Nav.Link href="/web development">WEB DEVELOPMENT</Nav.Link>
                    <Nav.Link href="/web design">WEB DESIGN & UI/UX</Nav.Link>
                    <Nav.Link href="/ARVR">AR & VR</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav className="navbar">
        //     <div>
        //         <ul className="Navbar-nav">
        //         <li className="nav-item">
        //                 <Link
                          to="/"className={
                              window.location.pathname=== "/" || window.location.pathname ==="/home"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                         Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/about"
                          className={
                              window.location.pathname ==="/about" ? "nav-link active" : "nav-link"}
                        >
                         ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/web development"
                          className={
                              window.location.pathname=== "/web development" ? "nav-link active": "nav-link"}
                        >
                         WEB DEVELOPMENT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/web design"
                          className={
                              window.location.pathname=== "/web design" ? "nav-link active": "nav-link"}
                        >
                         WEB DESIGN & UI/UX
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                          to="/ARVR"
                          className={
                              window.location.pathname=== "/ARVR" ? "nav-link active": "nav-link"}
                        >
                         AR/VR 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav> */
    )
}

export default Navbars;