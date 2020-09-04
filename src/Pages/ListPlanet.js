import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function ListPlanet() {
    useEffect(getListPlanet, [])

    const [listPlanet, setListPlanet] = useState([])

    function getListPlanet() {
        for (var i = 1; i<7; i++) {
            axios.get("https://swapi.dev/api/planets/?page=" + i)
                .then(response => {
                    response.data.results.forEach(function(newResult) {
                        listPlanet.push(newResult)
                    })
                    setListPlanet([...listPlanet]);
                })
        }
    }

    function displayListPlanet() {
        console.log(listPlanet)
        return (listPlanet.map(planete => <div class="list"><li><Link to={"/planet/"+GetId(planete.url)}>{planete.name}</Link></li></div>))
    }

    return displayListPlanet()
}

export default ListPlanet