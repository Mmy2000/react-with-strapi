import React from 'react'
import {
  ChakraProvider,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { formatPrice, textSlicer } from '../utils/functions';
import { useColorModeValue } from "@chakra-ui/react";


export default function ProductCard({attributes,id}) {
 

  return (
    <>
      <Card
        maxW="sm"
        mx={"auto"}
        bg={useColorModeValue("white", "gray.700")} // Adjust background color for dark mode
        boxShadow="2xl"
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "translateY(-10px)", boxShadow: "3xl" }} // Enhanced hover effect for depth
      >
        <CardBody p={6}>
          <Image
            src={`${import.meta.env.VITE_SERVER_URL}${
              attributes?.thumbnail?.data?.attributes?.url
            }`}
            alt="Green double couch with wooden legs"
            boxSize="220px"
            borderRadius="full"
            mx="auto"
            objectFit="cover"
            mb={5}
            border="5px solid #f4f7fb"
          />
          <Stack spacing={4} textAlign="center">
            <Heading
              size="lg"
              color={useColorModeValue("gray.800", "white")} // White text in dark mode
              fontWeight="semibold"
            >
              {attributes.title}
            </Heading>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.300")} // Lighter text in dark mode
              px={4}
              lineHeight="1.8"
            >
              {textSlicer(attributes.description)}
            </Text>
            <Text
              color={useColorModeValue("blue.500", "blue.300")} // Adjust text color for price in dark mode
              fontSize="2xl"
              fontWeight="bold"
            >
              ${formatPrice(attributes.price)}
            </Text>
            <Button
              as={Link}
              to={`/products/${id}`}
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
              rightIcon={<ArrowForwardIcon />}
              transition="all 0.3s ease"
            >
              View Details
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
