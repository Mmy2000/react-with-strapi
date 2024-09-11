import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Badge,
  Button,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export default function Product() {
    const { id, category } = useParams();
    const navigate = useNavigate()
    const getProductList = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/api/products/${id}?populate=thumbnail,categories`
      );
      return data;
    };
    
    

    const { isLoading, data, error } = useQuery(["products",id],getProductList);
    const goBack = () => navigate(-1)
    console.log(category);
    useEffect(() => {
        document.title = `Product Store | product ${id} page`
    }, []);
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 12 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Product Image */}
        <Image
          rounded="lg"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "auto", md: "400px" }}
          src={`${import.meta.env.VITE_SERVER_URL}${
            data?.data?.attributes?.thumbnail?.data?.attributes?.url
          }`}
          objectFit="cover"
        />

        {/* Product Details */}
        <VStack align="flex-start" spacing={4} w="full">
          <Heading fontSize="2xl">{data?.data?.attributes?.title}</Heading>
          <Badge colorScheme="green"></Badge>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            {data?.data?.attributes?.description}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            ${data?.data?.attributes?.price.toFixed(2)}
          </Text>
          {data?.data?.attributes?.stock > 0 ? (
            <Badge colorScheme="green">In Stock</Badge>
          ) : (
            <Badge colorScheme="red">Out of Stock</Badge>
          )}
          <Button colorScheme="blue" size="lg" w="full">
            Add to Cart
          </Button>
        </VStack>
      </Flex>
    </Box>
    // <Flex alignItems="center" justifyContent="center" mt={10}>
    //   <Card maxW="sm" border="1px solid #e2e8f0" borderRadius="md">
    //     <CardBody>
    //       <Image
    //         src={`${import.meta.env.VITE_SERVER_URL}${
    //           data?.data?.attributes?.thumbnail?.data?.attributes?.url
    //         }`}
    //         alt="iPhone 9"
    //         borderRadius="lg"
    //       />
    //       <Box mt={4}>
    //         <Heading size="md">{data?.data?.attributes?.title}</Heading>
    //         <Text mt={2} color="gray.600">
    //           {data?.data?.attributes?.description}
    //         </Text>
    //         <Text mt={2} color="blue.500" fontWeight="bold">
    //           {data?.data?.attributes?.categories?.data?.attributes?.title}
    //         </Text>
    //         <Text mt={2} fontSize="xl" fontWeight="bold">
    //           ${data?.data?.attributes?.price}
    //         </Text>
    //       </Box>
    //     </CardBody>
    //     <CardFooter>
    //       <Button colorScheme="purple" width="full">
    //         ADD TO CART
    //       </Button>
    //     </CardFooter>
    //   </Card>
    // </Flex>
  );
}
