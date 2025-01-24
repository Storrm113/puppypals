import React, { useState } from "react";
import { puppyList } from "./data";
import './app.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);


  console.log(puppies);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p 
              onClick={() => { 
                console.log("puppy id: ", puppy.id);  // Log the puppy id
                setFeatPupId(puppy.id);  // Set the featured puppy ID
              }} 
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
