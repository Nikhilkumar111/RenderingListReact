
import './App.css'

import {people} from './data.jsx';
import Point from './Points.jsx';
import {getImageUrl} from './utils.jsx';
import Cups from './Cups.jsx';
export default function App(){
    const listItems = people.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}/>
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>  
    </li>
  );

  return (
    <article>
    <h1>Scientists</h1>
    <ul>{listItems}</ul> 
    <Point/> 
    <Cups/>
      </article> 
  );
}
