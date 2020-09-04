import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as axios from "axios";

function CharacterPages(){


    const result = useParams()
    console.log(result)

    useEffect(getCharacter,[])
    const [character, setCharacter] = useState({})

    function getCharacter(){
        axios.get("https://swapi.dev/api/people/"+result.id)
           .then(response =>
                 setCharacter(response.data)
          )
    }

    function displayCharacter() {
        console.log(character)
        return (<body><h1>{character.name}</h1><p>Année de naissance : {character.birth_year}</p><p> Poids : {character.height}</p></body>)
    }

    return displayCharacter()
}

export default CharacterPages