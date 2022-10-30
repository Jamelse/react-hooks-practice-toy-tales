import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLikeClick}) {
  return (
    <div id="toy-collection">{toys.map(toy => 
    <ToyCard key ={toys.id} toys={toy} onDelete={onDelete} onLikeClick={onLikeClick}/>)}</div>
  );
}

export default ToyContainer;
