
# Pokemon Picker

A brief description of what this project does and who it's for

A website that helps users search for people to search for a specific Pokemon.
The website will provide the visitors with some information including artwork of the selected pokemon. 
If you are interested in having a bit of fun or just searching for a specific pokemon for a reason, 
this is your website to go!
## Acknowledgements

 - [Using async and await](https://www.youtube.com/watch?v=Yp9KIcSKTNo)
 - [Google Fonts](https://fonts.google.com/about)
 - [Pokemon Icons](https://commons.wikimedia.org/wiki/Category:Pok%C3%A9mon_types_icons)



## Process

Started with the basic HTML structure and moved on to JavaScript.
Used `async` and `await` to fetch my API data.
Created my functions outside my fetch function to be able to 
reuse them when needed. Finally, I used vanilla CSS for the final touches 
and to improve my website aesthetically.
## API Reference

#### Fetch a Pokemon

[Pokemon API](https://pokeapi.co/)

```http
  GET https://pokeapi.co/api/v2/pokemon/${pokemonName}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pokemonName` | `string` | **Required**. https://pokeapi.co/api/v2/${pokemonName}|





## Optimizations

Capitlizing function
```
function capitalized(dataName){
  return dataName.charAt(0).toUpperCase() + dataName.slice(1)
}
```

Creating skills list and using the capitalizing function within

```
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
```
Firs time creating my own function that helps me keep my code DRY!

## Author

- [Eno](https://github.com/codEno12)
 

