import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'
import { Box , Grid } from '@chakra-ui/react'
import axios from 'axios';
import { useQuery } from 'react-query';
import Sceleton from '../components/Sceleton';
import { useSelector } from "react-redux";
import { selectNetwork } from "../app/features/networkSlice";


export default function Products() {
  
  const { isOnline } = useSelector(selectNetwork);

  const getProductList = async ()=>{
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/products?populate=thumbnail,categories`
    );
    return data
  }

  const {isLoading , data , error} = useQuery('products', () => getProductList())
  console.log(data?.data);
  
  if (isLoading || !isOnline) {
    return <Grid
      m={10}
      templateColumns={"repeat(auto-fill,minmax(300px,1fr))"}
      gap={5}
    >
      {Array.from({ length:20},(_,idx) => (
        <Sceleton key={idx}/>
      ))}
    </Grid>
  }
  
  return (
    <Grid
      m={10}
      
      templateColumns={"repeat(auto-fill,minmax(300px,1fr))"}
      gap={5}
    >
      {data?.data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
}
