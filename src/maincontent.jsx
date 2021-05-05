import {Carousel} from 'react-bootstrap';

export function Maincontent() {
    return(
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>promenadrutter i Helsingfors</h3>
          <p>Helsingfors är en drömstad för fotgängare: här är det lätt att andas, bakom knuten finns alltid något nytt och intressant, och avstånden blir inte heller för långa. Promenadrutterna presenterar särpräglade stadsdelar, platser som de lokala invånarna älskar men också väl dolda hemligheter. Bäst av allt, i den pulserande urbana staden är havet alltid nära..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715__340.jpg"
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Det bästa med Helsinfors är havet</h3>
          <p>Det bästa med Helsingfors är havet. Närheten till havet kan du förnimma överallt, eftersom det öppna havet omgärdar staden från tre håll.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/06/05/02/25/orchard-2372731__340.jpg"
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
  
  
  