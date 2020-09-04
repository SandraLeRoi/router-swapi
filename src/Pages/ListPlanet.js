import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function ListPlanet() {
    useEffect(getListPlanet, [])

    const [listPlanet, setListPlanet] = useState([])

    function getListPlanet() {
        axios.get("https://swapi.dev/api/planets")
            .then(response => {
                    console.log(response.data);
                    setListPlanet(response.data.results);
            })
    }

    function displayListPlanet() {
        console.log(listPlanet)
        return (listPlanet.map(planete => <li><Link to={"/planet/"+GetId(planete.url)}>{planete.name}</Link></li>))
    }

    return displayListPlanet()
}

export default ListPlanet