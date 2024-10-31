import React from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "../utils/productType";


const Product: React.FC<ProductProps> = ({ products }) => {
  return (
    <>
      <section className="w-full py-10">
        <div className="max-w-[1200px] w-full mx-auto grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-3">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};




export default Product;

