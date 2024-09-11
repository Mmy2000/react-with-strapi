import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'
import { Box , Grid } from '@chakra-ui/react'
import axios from 'axios';


export default function Products() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:1337/api/products`).then( response => setProduct(response.data.data)).catch(err => console.log(err)
    );
  }, []);
  
  return (
    <Grid
      m={10}
      templateColumns={"repeat(auto-fill,minmax(300px,1fr))"}
      gap={5}
    >
      {product.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
}
