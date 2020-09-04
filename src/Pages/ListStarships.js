import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function ListStarships() {
    useEffect(getListStarships, [])

    const [listStarships, setListStarships] = useState([])

    function getListStarships() {
        for (var i = 1; i<5; i++) {
            axios.get("https://swapi.dev/api/starships/?page=" + i)
                .then(response => {
                    response.data.results.forEach(function (newResult) {
                        listStarships.push(newResult)
                    })
                    setListStarships([...listStarships]);
                })
        }
    }

    function displayListStarships() {
        console.log(listStarships)
        return (listStarships.map(starship => <li><Link to={"/starships/"+GetId(starship.url)}>{starship.name}</Link></li>))
    }

    return displayListStarships()
}

export default ListStarships