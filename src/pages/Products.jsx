import React from 'react'
import ProductCard from '../components/productCard'
import { Box , Grid } from '@chakra-ui/react'

export default function Products() {
  return (
    <Grid m={10} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"} gap={5}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Grid>
  );
}
