import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert,  Button,  Form, } from 'react-bootstrap';
import useState from 'react';
import React from 'react';


export function AlertDismissible() { 
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Time to login</Alert.Heading>
<h1>login</h1>
 <Form.Control size="lg" type="text" placeholder="ussername" />
  <br />
  <Form.Control size="lg" type="text" placeholder="passworld" />
  <br />
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            login!
          </Button>
                 <Button onClick={() => setShow(false)} variant="outline-success">
            exsit!
          </Button>
       
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>login</Button>}
    </>
  );
}

