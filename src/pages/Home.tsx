import React, { useEffect, useState } from 'react'
import SearchBox from '../components/SearchBox'
import Product from '../components/Product'
import { Product as ProductStructure , ProductProps } from '../utils/productType'
import customAPIFetcher from '../utils/CustomAPIFetcher'

export default function Home() {
  const [productsData , setProductsData] = useState<ProductProps>({products : []}) 

  const fetchProductData = async(url:string)=>{
    const data = await customAPIFetcher<ProductStructure[]>(url)
    setProductsData({ products: data });
    console.log(data)
  }
  useEffect(()=>{
    fetchProductData("https://fakestoreapi.com/products")
  },[])

  return (
    <>
    <SearchBox/>
    <Product products={productsData.products}/>
    </>
  )
}