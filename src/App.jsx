import React, { useEffect, useState } from 'react';

export default function App() {

  const { NekosAPI } = require("nekosapi");
 
  const nekos = new NekosAPI();

useEffect(()=>{nekos.getRandomImage((categories = ["catgirl"])).then((image) => {
  console.log(image.url);
}); 
},[])



  const [imageLink, setImageLink] = useState("")
  const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };

  const randomArray = (min, max, length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(random(min, max));
    }
    return array;
  };

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto',{mode:'cors'}
  ).then(response => response.json()
)
  .then(response => {
    console.log(response);
    setImageLink(response.sprites.front_shiny)
  }); 
 
    
  },[]);


 

  const [randomIndexes, setRandomIndexes] = useState(randomArray(1, 3, 3));

  const handleClick = () => {
    setRandomIndexes(randomArray(1, 3, 3));
  };

  return (
    <>
       <div style={{ display: 'flex' }}> 
         
        {randomIndexes.map((name, index) => (
         
          <div key={index}  style={{margin: '5px',  padding : '10px', border: "25px" } }>
            <img src={`./img/${name}.jpg`} alt={`Image ${index}`} height={'250px'}  width = {'250px'}  onClick={handleClick}/>
            {console.log(randomIndexes)}
          </div>
         
        ))}

            <div style={{margin: '5px',  padding : '10px', border: "25px" } }>
            <img src={imageLink} height={'250px'}  width = {'250px'}  onClick={handleClick}/>
            {console.log(imageLink)}
          </div>
         
       
          {randomIndexes.map((name, index) => (
         
         <div key={index}  style={{margin: '5px',  padding : '10px', border: "25px" } }>
           <img src={`./img/${name}.jpg`} alt={`Image ${index}`} height={'250px'}  width = {'250px'} onClick={handleClick} />
           {console.log(randomIndexes)}
         </div>
        
       ))} 
       
         </div>
         
   
 
    </>
  );
}
