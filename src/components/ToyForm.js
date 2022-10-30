import React, {useState} from "react";

function ToyForm({onSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
})
  
function handleChange(e){
const key = e.target.name
setFormData({
  [key]: e.target.value
})
}

function handleFormSubmit(e){
  e.preventDefault();
  const submitData ={
    name: formData.name,
    image: formData.image,
    likes: 0,
  }

  fetch('http://localhost:3001/toys', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(submitData),
  })
  .then(r => r.json())
  .then(newToy => onSubmit(newToy))
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
