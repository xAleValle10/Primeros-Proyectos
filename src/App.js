import { useState } from 'react';
import  {data}  from './data';
import {List} from './List';

export function App() {
  const [cumpleañeros, setCumpleañeros] = useState(data);

  return (
    <main>
    <div className='container'>
      <h3> {cumpleañeros.length} Birthdays today </h3>
      <List cumpleañeros={cumpleañeros} />
      <button onClick={() => setCumpleañeros([])} className='container'>Clear All</button>
    </div>
    </main>
  );
}




