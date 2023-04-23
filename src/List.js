import React from 'react';

 export const List = ({ cumpleañeros }) => {
   const cumpleañerosList = cumpleañeros.map((cumpleañero) => (
     <li key={cumpleañero.id} className='person'>
       <img src={cumpleañero.image} alt={cumpleañero.name} />
       <div>
         <h4>{cumpleañero.name}</h4>
         <p>{cumpleañero.age} años</p>
       </div>
     </li>
   ));
 
   return (
     <div>
       <ul>{cumpleañerosList}</ul>
     </div>
   );
 };
 
 


 
