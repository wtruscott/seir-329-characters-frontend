import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.character);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Character Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Character Image URL"
        value={formData.img}
        onChange={handleChange}
      />
       <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.description}
        onChange={handleChange}
      />
       <input
        type="text"
        name="weapon"
        placeholder="Weapon"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="home"
        placeholder="Home"
        value={formData.description}
        onChange={handleChange}
      />
       <input
        type="text"
        name="enemy"
        placeholder="Enemy of Character"
        value={formData.description}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;