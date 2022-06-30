import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import './App.css';

import { useState, useEffect } from "react";
function UserForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container center">
         <button className="btn" onClick={handleShow}><i className="fa fa-plus"></i></button>

        <div className="child">
 
        

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>User Creation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter First name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Date of birth</Form.Label>

                  <Form.Control type="date" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Phone number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label> City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label> State</Form.Label>
                  <Form.Control type="text" placeholder="Enter State" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country </Form.Label>
                  <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>
          
       
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
       
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>City</th>
              <th>Suite</th>
              <th>Zip code</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>

      </div>
    );
  }
}

export default UserForm;
