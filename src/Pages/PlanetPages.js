import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import * as axios from "axios";

function PlanetPages() {
    const params = useParams()
    //console.log(params)

    useEffect(getPlanet, [])

    const [planet, setPlanet] = useState([])

    function getPlanet() {
        axios.get("https://swapi.dev/api/planets/"+params.id)
            .then(response => {
                setPlanet(response.data)
                //console.log(response.data)
            })
    }

    function displayPlanet() {
        //console.log(planet)
        return (<body><h1>{planet.name}</h1><p>Climat : {planet.climat}</p><p>Population : {planet.population}</p><p>Terrain : {planet.terrain}</p></body>)
    }

    return displayPlanet()
}

export default PlanetPages