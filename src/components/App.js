import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))
  },[])
 
  function onDeleteHandler(deletedToy){
    const filteredToys = toys.filter((toy) => {
      return toy.id !== deletedToy.id
    })
    setToys(filteredToys)
  }

  function handleUpdateToy(targetToy){
    const updatedToy = toys.map ((toy) => {
      if (toy.id === targetToy.id){
        return targetToy;
      } else {
        return toy;
      }
    })
    setToys(updatedToy)
  }
  
  function handleSubmit(newToy){
    setToys([...toys, newToy])
  }
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} 
      onDelete={onDeleteHandler} 
      onLikeClick={handleUpdateToy}/>
    </>
  );
}

export default App;
