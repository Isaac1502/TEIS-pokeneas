const express = require("express")
const os = require("os")
const app = express()
const port = 80

const pokeneas = [
    {
        "id": 1,
        "nombre": "Pika'churro",
        "altura": 0.4,
        "habilidad": "Estática",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "frase_filosofica": "La verdadera felicidad se encuentra en el camino, no en la meta"
    },
    {
        "id": 2,
        "nombre": "Chari'zao",
        "altura": 1.7,
        "habilidad": "Mar llamas",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        "frase_filosofica": "La determinación es la llave del éxito"
    },
    {
        "id": 3,
        "nombre": "Blastua",
        "altura": 1.6,
        "habilidad": "Torrente",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "frase_filosofica": "No hay logro sin sacrificio"
    },
    {
        "id": 4,
        "nombre": "Luka'rion",
        "altura": 1.2,
        "habilidad": "Impasible",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        "frase_filosofica": "La verdadera fuerza reside en la calma"
    },
    {
        "id": 5,
        "nombre": "Gyaradato",
        "altura": 6.5,
        "habilidad": "Intimidación",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        "frase_filosofica": "La verdadera libertad es dejar ir lo que ya no te sirve"
    },
    {
        "id": 6,
        "nombre": "Mewtucho",
        "altura": 2.0,
        "habilidad": "Presión",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        "frase_filosofica": "Solo somos dueños de nuestras acciones, no de sus consecuencias"
    },
    {
        "id": 7,
        "nombre": "Gardevoira",
        "altura": 1.6,
        "habilidad": "Sincronía",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        "frase_filosofica": "La belleza no está en lo que se ve, sino en lo que se siente"
    },
    {
        "id": 8,
        "nombre": "Snorlaxito",
        "altura": 2.1,
        "habilidad": "Viscosidad",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        "frase_filosofica": "La vida es corta, pero si la saboreas bien, puede ser muy dulce"
    },
    {
        "id": 9,
        "nombre": "Salam'pela",
        "altura": 1.5,
        "habilidad": "Intimidación",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
        "frase_filosofica": "La sabiduría no es el conocimiento, sino la aplicación del conocimiento"
    },
    {
        "id": 10,
        "nombre": "Eevecer",
        "altura": 0.3,
        "habilidad": "Adaptabilidad",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
        "frase_filosofica": "La verdadera fuerza no radica en ser el más grande, sino en adaptarse a cualquier situación"
    }
]

app.get('/', (req, res) => {
    const number = Math.floor(Math.random()*pokeneas.length)
    const { id, nombre, altura, habilidad } = pokeneas[number]
    const id_contenedor = os.hostname()
    res.send({ id, nombre, altura, habilidad, id_contenedor})
})

app.get('/image', (req, res) => {
    const number = Math.floor(Math.random()*pokeneas.length)
    const { imagen, frase_filosofica } = pokeneas[number]
    const id_contenedor = os.hostname()
    res.send({ imagen,frase_filosofica, id_contenedor })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})