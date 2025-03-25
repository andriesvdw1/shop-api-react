import React from 'react'
import { useEffect, useState } from 'react';
function ProductList() {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
    

  return (    
    <section className='product-list'>
        { products.map((product) => (
            <div className="card" key={product.id}>
                <p className='id' style={{backgroundColor:"blue", color:"white", width:"45px"}}>{product.id}</p>
                <p className='name'>{product.name}</p>
                <p className='info'>
                    <span>{product.price}</span>
                    <span className={product.in_stock ? "instock" : "nostock"}>{product.in_stock ? " in stock" : " unavailable"}</span>
                </p>

            </div>
            
        ))}
    </section>
  )
}

export default ProductList