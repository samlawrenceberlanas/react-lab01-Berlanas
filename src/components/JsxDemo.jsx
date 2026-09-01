import React from 'react'

/* JSX RULES PRACTICE */

/*Using PascalCase for naming attributes*/
const ThisDemo = () => {
  const character = "sigmaboy";
  return (
    <>
    {/*Jsx demo 101*/}
    <h1>This is a demo of JSX</h1>
    <p>I am using PascalCase for naming attributes</p>
    <img src="https://i.pinimg.com/736x/91/f4/1c/91f41ca4b86b3140491db6f68973d916.jpg" alt="Lu2" />
    <p>
      Today we are cooking, let's Prepare the Ingredients. {" "}
      <strong>{character.toUpperCase()}</strong>!!!
    </p>
    <label htmlFor="favoriteDish">
  Favorite Dish:
</label>

<input id="favoriteCharacter" type="text" placeholder="Type here!"/>
    </>
  )
}

export default ThisDemo