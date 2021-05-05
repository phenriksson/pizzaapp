import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Maincontent } from './maincontent';
import { Allmighty, jelly, berrys, side } from './about';


export function Appe() {
  return (
    <div>
      <BrowserRouter>
      <Route path='/info' component={side} />
         <Route path='/kellor' component={berrys} />
         <Route path='/shop' component={jelly} /> 
          <Route path='/about' component={Allmighty} />
          <Route path='/home' component={Maincontent} />
        </BrowserRouter>
    </div>
  );
}