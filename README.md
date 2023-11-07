# lab-stealing-data

- Create a seed file (seed.js) we need mongoose and dotenv packages
- This seed file is going to collect data from "https://rickandmortyapi.com/api/character" (fetch)
- With this information, now we are going to "clean it". We just need the name of the character and a picture.
- Let's create a new array of objects 

```json
[
    {
        "name": "Morty",
        "imageUrl": "https://dsadsdasdasdas"
    },
    {
        "name": "Rick",
        "imageUrl": "https://dsadsdasdasdas"
    },
]
```
- Use mongoose to connect to your DB and create the collection of characters.
- You are going to need a simple model with only name and imageurl.
