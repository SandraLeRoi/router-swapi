import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as axios from "axios";

function StarshipsPages() {

    const params = useParams()
    //console.log(params)

    useEffect(getStarships, [])

    const [starships, setStarships] = useState([])

    function getStarships() {
        axios.get("https://swapi.dev/api/starships/"+params.id)
            .then(response => {
                setStarships(response.data)
                console.log(response.data)
            })
    }

    function displayPlanet() {
        console.log(starships)
        return (<body><h1>{starships.name}</h1><p>Longueur : {starships.length}</p></body>)
    }

    return displayPlanet()
}

export default StarshipsPages