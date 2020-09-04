import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {Link} from "react-router-dom";
import {GetId} from "../GetId";

function HomePage(){

    useEffect(getListCharacter, [])

    const [result, setResult] = useState([])

    function getListCharacter() {
        for (var i = 1; i<10; i++) {
            axios.get("https://swapi.dev/api/people/?page="+i)
                .then(response => {
                    response.data.results.forEach(function(newResult) {
                        result.push(newResult)
                    })

                    setResult([...result]);
                    })
        }
    }

    function displayListCharacter(){
        console.log(result)
        return result.map(character => <li><Link to={"/character/"+GetId(character.url)}>{character.name}</Link></li>)
    }

    return displayListCharacter()

}

export default HomePage