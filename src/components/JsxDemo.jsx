import React from 'react'

/* JSX RULES PRACTICE */

/*Using PascalCase for naming attributes <3*/
const ThisDemo = () => {
  const character = "cinnamoroll";
  return (
    <>
    {/*Jsx demo 101*/}
    <h1>This is a demo of JSX</h1>
    <p>I am using PascalCase for naming attributes</p>
    <img src="https://i.pinimg.com/736x/e7/ce/77/e7ce7789198048dd89fcd2532078bf4a.jpg" alt="Cinna" />
    <p>
      The image above is using a self-closing tag. Btw, this is my verrryyy cute {" "}
      <strong>{character.toUpperCase()}</strong>!!!
    </p>
    <label htmlFor="favoriteCharacter">
  Favorite Sanrio Character:
</label>

<input id="favoriteCharacter" type="text" placeholder="Type here!"/>
    </>
  )
}

export default ThisDemo