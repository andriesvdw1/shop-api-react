import React from 'react'
import { useEffect, useState } from 'react';
import '/src/components/ProductList/ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [url]);
    

  return (    
    <section className='product-list'>
        <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>Out of Stock Only</button>
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