

/*import logo from './logo.svg';*/
import './App.css';

export function Header() {
  return(
    <div> 
      
      <header  className="navbar"> <h1 className="navbar a.logo">pizza orders helsinki</h1> <h1 className="navbar a.logo">hi</h1> </header>
    
     <h1 className="navbar-right"><a href="#home" >settings</a>         </h1> 
     
    
    <h1 className="navbar-active"><a href="#home" >settings</a>         </h1> 
    
      
   
       
      </div> 
   
  )
}

export function Maincontent() {
  return(
    <div> 
      <header className="heading">
  <ul className="navbar-middle">
  <li>cheap prices</li>
  <li>easy to use</li>
  <li>saftty for our qustomers</li>
</ul>  

 <button type="button"> order</button> </header>
       </div>
    
  )
}
export function Footer() {
  return(
      <div>      
      <footer className="footer"><h1>this is the footer </h1></footer>
      </div>
    
  )
}

