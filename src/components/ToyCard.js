import React from "react";

function ToyCard({toys, onDelete, onLikeClick}) {
  const {id, name, image, likes} = toys
  
  function onToyDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => onDelete(toys))
  }

  function likeClickHandler(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: parseInt(likes) + 1
      })
    })
    .then (r => r.json())
    .then(updatedToy => onLikeClick(updatedToy))
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" value={likes} onClick={likeClickHandler}>Like {"<3"}</button>
      <button className="del-btn" onClick={onToyDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
