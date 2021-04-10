
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./SignupArea.css";
import axios from "axios";
import global from "../../Services/Globals";

const LoginForm = ({ onSubmit }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
            />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
            />
            </Form.Group>
            <button onClick={() => addUser(username, email, password)} className="signup-button" type="submit">
                SIGN UP
            </button>
        </Form>
    );
};

async function addUser(username: string, email: string, password: string) {
    try {
        const {data} = await axios.post(global.addUserUrl, { username , email , password });
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}

function SignupArea(): JSX.Element {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    const onLoginFormSubmit = (e: any) => {
        e.preventDefault();
        handleClose();
        
    };

    return (
        <div className="SignupArea">
           
            <button className="signup-button" onClick={handleShow}>
                SIGN UP
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <LoginForm onSubmit={onLoginFormSubmit} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SignupArea;
