import React from 'react';
import ProductQuantity from './ProductQuantity';            

function productRow({product}){
    return(
    <tr class='reactOrderRow'>
        <td>{product.product} </td>
        <td>{product.company} </td>
        <td>${product.price.toLocaleString()} </td>
        <td><ProductQuantity /></td>
    </tr>
    )
}

export default productRow