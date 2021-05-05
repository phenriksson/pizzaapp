/*import logo from './logo.svg';*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, Form, FormControl,Carousel, Button} from 'react-bootstrap';


export function Header() {
  return(
    <div classname ='navpositione'> 
  
    
      <Navbar bg="light" expand="lg"  className="positione">
      <sticky-top>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Hem</Nav.Link>
          <Nav.Link href="/about">Karta</Nav.Link>
          <Nav.Link href="/shop">butik</Nav.Link>
          <Nav.Link href="/kellor">källor</Nav.Link>
          <Nav.Link href="/info">info om sidan</Nav.Link>
        </Nav>
        <Form inline>
    <FormControl type="text" placeholder="sök" className=" mr-sm-2" />
    <Button type="submit_green">sök</Button>
  </Form>
  
        </sticky-top> 
    </Navbar>
  </div> 
  )
}

export function Middle() 
{
  return(

<h2 className='undermiddstyle'> text </h2>

)
  
}


export function Footer() {
  return(
  
<h2 className='thirdseck'> text </h2>
  )
}

