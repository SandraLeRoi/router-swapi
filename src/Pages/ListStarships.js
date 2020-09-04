import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function ListStarships() {
    useEffect(getListStarships, [])

    const [listStarships, setListStarships] = useState([])

    function getListStarships() {
        axios.get("https://swapi.dev/api/starships")
            .then(response => {
                console.log(response.data);
                setListStarships(response.data.results);
            })
    }

    function displayListStarships() {
        console.log(listStarships)
        return (listStarships.map(starship => <li><Link to={"/starships/"+GetId(starship.url)}>{starship.name}</Link></li>))
    }

    return displayListStarships()
}

export default ListStarships