import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function HomePage(){

    useEffect(getListCharacter, [])

    const [result, setResult] = useState([])

    function getListCharacter() {
        axios.get("https://swapi.dev/api/people/")
            .then(response => {
                setResult(response.data.results);
            })
    }

    function displayListCharacter(){

        console.log(result)
        return result.map(personnage => <li><Link to={"/personnage/"+GetId(personnage.url)}>{personnage.name}</Link></li>)
    }

    return displayListCharacter()

}

export default HomePage