import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import Product from '../components/Product';
import { Product as ProductStructure, ProductProps } from '../utils/productType';
import customAPIFetcher from '../utils/CustomAPIFetcher';

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [productsData, setProductsData] = useState<ProductProps | { error: string }>({ products: [] });
  const [filteredProducts, setFilteredProducts] = useState<ProductStructure[]>([]);

  const fetchProductData = async (url: string) => {
    try {
      const data = await customAPIFetcher<ProductStructure[]>(url);
      setProductsData({ products: data });
      setFilteredProducts(data); // Initialize filtered products with all products
    } catch (error) {
      console.error('Error fetching product data:', error);
      setProductsData({ error: 'Failed to fetch products' });
    }
  };

  useEffect(() => {
    fetchProductData("https://fakestoreapi.com/products");
  }, []);

  

  useEffect(() => {
    if ('products' in productsData) {
      const searchValueInLowerCase: string = searchValue.toLowerCase();
      if (searchValue !== "") {
        const filtered = productsData.products.filter((product) =>
          product.title.toLowerCase().includes(searchValueInLowerCase)
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(productsData.products); // Reset to all products when search is cleared
      }
    }
  }, [searchValue, productsData]);

  return (
    <>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Product products={filteredProducts} />
    </>
  );
}
