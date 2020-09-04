import React, {useEffect, useState} from "react";
import * as axios from "axios";
import Route, {Link} from "react-router-dom";
import {GetId} from "../GetId";

function HomePage(){
    return (<body><Link to={"/character"}>Personnages</Link><br/>
    <Link to={"/planet"}>Planètes</Link><br/>
    <Link to={"/starships"}>Vaisseaux</Link></body>)
}

export default HomePage