import React from 'react';
import {useParams} from "react-router-dom";

import {uppercaseFL} from "../helpers"

const ItemDetail = ({pokes}) => {
    let {id} = useParams();
    id = id -1;
    console.log(id);
    console.log(pokes)
    
 
    console.log(pokes[id].name)
    return ( 
        <>
        <img src={pokes[id].sprites.front_default} alt=""/>
        <h4>Nombre: {uppercaseFL(pokes[id].name)}</h4>
        <h4>Altura: {pokes[id].height / 10} metros</h4>
        <h4>Peso: {pokes[id].weight / 10} kilogramos</h4>
        </>
     );
}
 
export default ItemDetail;