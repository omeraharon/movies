import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import SignupArea from '../../../SignupArea/SignupArea';
import "./AppBar.css";


function AppBar(): JSX.Element {
    return (
        <div className="AppBar">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/home" color="red">Netflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <NavDropdown title="Movies" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="/category/28/Action">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/category/18/Drama">Drama</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    <SignupArea />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default AppBar;
