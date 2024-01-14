import React, { useState } from 'react';
import products from '../data/products.js'
import ProductRow from '../components/ProductRow.js';             

function OrderPage() {

    return(
        <>
            <h2>Orders</h2>
            <article>
                <h3>We have some pet products for sale, take a look and place an order below!</h3>
                <form action="/order" method="POST">
                    <fieldset className='reactOrder'>
                        <legend>
                            Here are our offerings...
                        </legend>
                        <p>
                        <table>
                            <caption>Select your quantities:</caption>
                            <thead>
                                <tr className="order">
                                    <th>Manufacturer</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>                      
                                {products.map((product, i) => 
                                    <ProductRow 
                                        product={product} 
                                        key={i}
                                    />)}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                        </p>
                    </fieldset>
                </form>
            </article>
        </>
    )
}
export default OrderPage;
