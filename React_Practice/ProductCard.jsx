import React, { useState } from 'react';

function ProductCard2() {

    const [products, setProducts] = useState([
        {
            id: 101,
            name: 'Maggie',
            price: 40,
            imgUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0'
        },
        {
            id: 102,
            name: 'Aloo Paratha',
            price: 60,
            imgUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
        },
        {
            id: 103,
            name: 'Pizza',
            price: 180,
            imgUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be51'
        }
    ]);

    return (
        <div>
            <h2>Product List</h2>

            {/* for...of loop */}
            {(() => {
                const items = [];  // yaha const sahi hai (array ko reassign nahi kar rahe)
                
                for (const p of products) {
                    const { id, name, price, imgUrl } = p;

                    items.push(
                        <div key={id} style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
                            <img src={imgUrl} width="150" />
                            <h3>{name}</h3>
                            <p>₹{price}</p>
                        </div>
                    );
                }

                return items;
            })()}
        </div>
    );
}

export default ProductCard2;
