import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
} from "@chakra-ui/react";


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
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 8, md: 16 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={12}>
        {/* Product Image */}
        <Box flex="1">
          <Image
            rounded="lg"
            w="100%"
            h={{ base: "auto", md: "450px" }}
            src={`${import.meta.env.VITE_SERVER_URL}${
              data?.data?.attributes?.thumbnail?.data?.attributes?.url
            }`}
            objectFit="cover"
            boxShadow="lg"
          />
        </Box>

        {/* Product Details */}
        <VStack align="flex-start" spacing={6} w="full" flex="1">
          <Heading as="h1" size="xl" fontWeight="bold">
            {data?.data?.attributes?.title}
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
            {data?.data?.attributes?.description}
          </Text>
          <Stack direction="row" align="center" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">
              ${data?.data?.attributes?.price.toFixed(2)}
            </Text>
            {data?.data?.attributes?.stock > 0 ? (
              <Badge colorScheme="green" px={2} py={1} borderRadius="md">
                In Stock
              </Badge>
            ) : (
              <Badge colorScheme="red" px={2} py={1} borderRadius="md">
                Out of Stock
              </Badge>
            )}
          </Stack>
          
          <Button
          w={'full'}
            as={Link}
            to={`/products`}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            size="md"
            color="white"
            px={8}
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, cyan.500, blue.600)",
              transform: "translateY(-3px)",
              boxShadow: "xl",
            }}
            _active={{
              bgGradient: "linear(to-r, cyan.600, blue.700)",
              transform: "translateY(0)",
            }}
            transition="all 0.3s ease"
          >
            Add to Cart
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
