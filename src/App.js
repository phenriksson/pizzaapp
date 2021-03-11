/*import logo from './logo.svg';*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Button, NavDropdown, Form, FormControl,Carousel} from 'react-bootstrap';


export function Header() {
  return(
    <div> 
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">pizza-app</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home order</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">user agrements</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">tutorial</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">how pizza online works</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </div> 
  )
}

export function Maincontent() {
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946__340.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}





export function Footer() {
  return(
      <div>      
      <footer className="footer"><h1 className="footerbox " this is the footer> hi <p1>here comes text</p1> </h1></footer>
      </div>
    
  )
}

