import React from "react";

const Display = (props) => {
  // destruct the dogs from props
  const {characters} = props

  const loaded = () => (
    <div style={{textAlign: "center"}}>
      {characters.map((character) => (
        <article key={character._id}>
        <img src={character.img}/>
        <h1>{character.name}</h1>
        <h3>{character.age}</h3>
        <h3>{character.home}</h3>
        <h3>{character.weapon}</h3>
        <h3>Enemy of {character.enemy}</h3>
        <button onClick={() => {
            props.selectCharacter(character)
            props.history.push("/edit")
          }}>
            edit
          </button>
          <button onClick={() => {
            props.deleteCharacter(character)
          }}>
            Delete
          </button>
      </article>
      ))}
    </div>
  )

  const loading = () => <h1>Loading</h1>
  
  return characters.length > 0 ? loaded() : loading ()
};

export default Display;
