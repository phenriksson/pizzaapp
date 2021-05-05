
import {Col, Card, Container, Row, Button} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
// or const {Loader} = require('google-maps'); without typescript
 import React from 'react';
import{Component} from 'react';

 const mapStyles = {
  width: '100%',
  height: '100%' 
 };



 const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
 export class Allmighty extends Component {
   static defaultProps = {
     center: {
       lat: 59.95,
       lng: 30.33
     },
     zoom: 11
   };
 
  
    render()  {
      return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCRXudOadbHsP39jQjA-kC4TkccK3X3M5M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      )
    }
  }  

  export function jelly() {
      return(
    
        <Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1f7102cb93ef48d7ba31ac3600bb5903_9366/Questar_Flow_NXT_Shoes_Black_FY9559_01_standard.jpg" />
  <Card.Body>
    <Card.Title>Adidas spring skor</Card.Title>
    <Card.Text>
     perfekta skor för att springa med men lämmpar sig ochså för promenader.
    </Card.Text>
    <Button onclick="window.location.href='https://www.adidas.fi/questar-flow-nxt-shoes/FY9559.html';">köp</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c79a34cb2e4a4bbe81c8ac1e011ac76c_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9318_01_standard.jpg" />
  <Card.Body>
    <Card.Title>Adidas springskor</Card.Title>
    <Card.Text>
      Adidas ultraboost lämmpar sig för långa löpsträckor. är ochså uttmärkta för promenader.
    </Card.Text>
    <Button onclick="window.location.href = 'hbl.fi';">Link</Button>


  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7be3dc89d51b4ff48e6dac68011db681_9366/Ultraboost_6.0_DNA_x_Parley_Shoes_White_FZ0250_01_standard.jpg" />
  <Card.Body>
    <Card.Title>Adidas springskor</Card.Title>
    <Card.Text>
      skorna passar uttmärkt för springing liksom promenader skorna kan lätt bli smutsiga.
    </Card.Text>
    <Button variant="primary">köp</Button>
  </Card.Body>
</Card></Col>
  </Row>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ab0ba93457c46fdb2d8ac8000910bf3_9366/Terrex_Swift_R3_GORE-TEX_Hiking_Shoes_Black_FW2769_01_standard.jpg" />
  <Card.Body>
    <Card.Title>Adidas terängskor</Card.Title>
    <Card.Text>
      skorna passar för naturpromenader och promenader. 
    </Card.Text>
    <Button variant="primary">köp</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d485e22944a3472b8d89a82d0120ecef_9366/VL_Court_2.0_Shoes_Black_DA9853_01_standard.jpg" />
  <Card.Body>
    <Card.Title>adidas promenadskor</Card.Title>
    <Card.Text>
      skorna är bäst lämpade för stadspromenader.
    </Card.Text>
    <Button variant="primary">köp</Button>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a21f8629c9524669bb11ac0200b37a27_9366/Questar_Flow_NXT_Shoes_Blue_FY9561_01_standard.jpg" />
  <Card.Body>
    <Card.Title>adidas promenadskor</Card.Title>
    <Card.Text>
    skorna är bäst lämpade för stadspromenader.

    </Card.Text>
    <Button variant="primary">köp</Button>
  </Card.Body>
</Card></Col>
  </Row>
 
</Container>
        )
    }
    


    export function berrys() {
      return(
        <a href="https://www.myhelsinki.fi/sv/se-och-g%C3%B6ra/aktiviteter/promenadrutter-i-helsingfors">helsingfors natur link</a>

  
        )
    }
      
    
    export function side() {
      return(
    
  <center classname = 'h3'> Natur ruttswebsidan är en websida som hjälper dig att hitta promenadsträckor i naturen. Sidan är uppbyggd med html, css, react, javascript och bootstrap. Sidan erbjuder en karta på promenadrutter i helsingfors plus information om naturen. Sidan är programmerad med visual studio code som text editerare.  </center>
  
        )
    }
    