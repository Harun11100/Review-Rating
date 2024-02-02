import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


import StarRating from './StarRating';
// function Test(){
//   const[gameRating,setGamerating]=useState(0);
//    return<div>
//     <StarRating  onUserSetRating={setGamerating}/>
//     <p>This game is rating {gameRating}</p>
//    </div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating/>
    <StarRating maxrating={5} defaultRating={3}  massage={["terrible","bad","okay","good","amazing"] }/>
    <StarRating size={9}/>
    {/* <Test/> */}
  </React.StrictMode>
);

