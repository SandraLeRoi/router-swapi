import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as axios from "axios";

function CharacterPages(){


    const perso = useParams()
    console.log(perso)

    useEffect(getCharacter,[])
    const [personnage, setPersonnage] = useState({})

    function getCharacter(){
        axios.get("https://swapi.dev/api/people/"+perso.id)
           .then(response =>
                 setPersonnage(response.data)
          )
    }

    function displayCharacter() {
        console.log(personnage)
        return (<body><h1>{personnage.name}</h1><p>Année de naissance : {personnage.birth_year}</p><p> Poids : {personnage.height}</p></body>)
    }

    return displayCharacter()
}

export default CharacterPages