import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {

// URL in a variable
const url = "https://seir-329-characters.herokuapp.com"
// State to hold the list of dogs
const [characters, setCharacters] = React.useState([])

  // Empty Dog - For the Create Form
  const emptyCharacter = {
    name: "",
    img: "",
    age: 0,
    weapon: "",
    home: "",
    enemy: ""
  }

  const [selectedCharacter, setSelectedCharacter] = React.useState(emptyCharacter)
// Function to get list of Dogs
const getCharacters = () => {
  console.log(url + "/character/")
// make a get a request to this url
fetch(url + "/characters/")
// use .then to take action when the response comes in
// convert data into js object
.then((response) => response.json())
// use the data from the response
.then((data) => {
  setCharacters(data)
})
}
// useEffect, to get the data right away
React.useEffect(() => {
  
  getCharacters()
}, [])

//handleCreate - function for when the create form is submitted
const handleCreate = (newCharacter) => {
fetch(url + "/characters/", {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify(newCharacter)
})
.then(() => getCharacters())
}

// handleUpdate - function for when the edit form is submitted
const handleUpdate = (character) => {
  fetch(url + "/characters/" + character._id, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(character)
  })
  .then(() => getCharacters())
}

// function to specify which dog we are updated
const selectCharacter = (character) => {
setSelectedCharacter(character)
}

// deleteDog to delete individual dog
const deleteCharacter = (character) => {
fetch(url + "/characters/" + character._id, {
  method: "delete"
})
.then(() => {
  getCharacters()
})
}
  return (
    <div className="App">
      <h1>CHARACTER LISTING SITE</h1>
      <hr />
      <Link to="/create">
        <button>Add Character</button>
      </Link>
      <main>
      <Switch>
      <Route
            exact
            path="/"
            render={(rp) => (
              <Display 
              {...rp} 
              characters={characters} 
              selectCharacter={selectCharacter}
              deleteCharacter={deleteCharacter} 
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                character={emptyCharacter}
                handleSubmit={handleCreate}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form 
              {...rp} 
              label="update" 
              character={selectedCharacter} 
              handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
