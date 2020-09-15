import React from 'react';
import {useParams} from "react-router-dom";

const ItemDetail = ({match}) => {
    let {id} = useParams();
    console.log(id);
    return ( 
        <h1>Hola mundo</h1>
     );
}
 
export default ItemDetail;