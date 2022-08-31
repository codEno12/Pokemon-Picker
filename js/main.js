


document.getElementById('choosePokemon').addEventListener('click', getFetch)


let currentState = true

// Toggle none for erorror window
function state (state) {
  let errorWindow = document.getElementById('errorWindow')
  if(errorWindow.style.display === "none") {
    errorWindow.style.display = 'block'
  } else {
     errorWindow.style.display = 'none'
  }
} 
state(currentState)


// Abilitiy Maker Function
function abilityListMaker(skillsData){
  let abilitiesArr = skillsData.abilities
  let ul = document.getElementById('abilities')
  ul.innerText = ""
    for(let i = 0; i < abilitiesArr.length; i++){
      console.log(abilitiesArr[i].name)
      let li = document.createElement('li')
      ul.appendChild(li).innerText = `Ability ${i+1}: ${capitalized(abilitiesArr[i].ability.name)}`
      }
}

// Types Symbols 
function displaySymbol(type){
  return document.getElementById('pokemonType').src = `./images/${type}.png`
}


// Function to capitalize the first letter of the passed data
function capitalized(dataName){
  return dataName.charAt(0).toUpperCase() + dataName.slice(1)
}

async function getFetch(){
  try {
    //Basic Data
    const userPokemon =  document.getElementById('pokemonName').value.toLowerCase()

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}`);

    const data = await response.json();

    console.log(data)
    //Evolution Data




      //Display Name 
        // Use capitilized function to the pokemonName
      
        let pokemonName = data.name
        document.getElementById('userPokemon').innerText = capitalized(pokemonName)

      //Display Type of Pokemon 
        // Use capitalized function to the pokemonType
        let pokemonType = data.types[0].type.name
        document.getElementById('type').innerText = `Type: ${capitalized(pokemonType)}`
        // pokemon type symbol for each 
        displaySymbol(pokemonType)

      // Abilities 
        abilityListMaker(data) // this is awesome -> invoke the abilityMaker function with the data


      // Image of the searched Pokemon
        // display the image on the dom 
        pokemonImg = data.sprites.other["official-artwork"]["front_default"]

        document.getElementById('pokemonArtWork').src = pokemonImg

      

  } catch(error) {

    // I need a div that is initially hidden 
       // error occurs => div visible with contents 
       // contents: display error message / reload buton / unknown pictures 

      state(currentState)
      let reloadBtn = document.getElementById('reload')
      reloadBtn.addEventListener('click', () => {
        location.reload()
      } )
      
      const failedUserPokemon =  document.getElementById('pokemonName').value.toLowerCase()

      

      if(failedUserPokemon === "harman"){
        document.getElementById('errorMessage').innerText = `${capitalized(failedUserPokemon) } is outside twerking please go catch him`
      } else {
        document.getElementById('errorMessage').innerText = `${capitalized(failedUserPokemon)} is not in your Pokedex`
      }

      console.log(error)
  }
}
