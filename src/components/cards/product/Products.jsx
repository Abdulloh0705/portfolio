import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../product/product.scss";

const Products = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(''); 

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`) 
            .then((response) => response.json())
            .then((data) => {
                setProduct(data); 
                setMainImage(data.images[0]); 
            })
            .catch((error) => console.error('API xatosi:', error)); 
    }, [id]);

    if (!product) return <p>Loading...</p>; 

    return (
        <div className="product">
            <div className="container">
                <div className="product-box">
                <div className="thumbnail_images">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                className={`thumbnail_image ${mainImage === image ? 'active' : ''}`}
                                src={image}
                                alt={`${product.title} thumbnail ${index + 1}`}
                                onClick={() => setMainImage(image)} 
                            />
                        ))}
                    </div>
                    <div className="product_img_box">
                        <img className="main_image" src={mainImage} alt={product.title} />
                    </div>
                    
                    <div className="product-esse">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product_description">{product.description}</p>
                        <p className="product-price">Price: ${product.price}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Products;