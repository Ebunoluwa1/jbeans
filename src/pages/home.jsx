import React from 'react';
import { product } from '../components/product/product';
import ProductCart from '../components/product/productCart';

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-8 ">
      {product.map((prod, index) => (
        <ProductCart data={prod} key={index}/>
      ))}
    </div>
  );
}

export default Home;
