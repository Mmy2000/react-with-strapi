import {
  Box,
  Flex,
  Skeleton,
  SkeletonText,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function ProductDetailSkeleton() {
  return (
    <Box
      padding="5"
      boxShadow="lg"
      bg={useColorModeValue("gray.200", "gray.700")} // Adjust background for light/dark mode
      rounded="lg"
      maxW="7xl"
      mx="auto"
    >
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Skeleton for Product Image */}
        <Skeleton
          flex="1"
          height={{ base: "200px", md: "450px" }}
          rounded="lg"
          startColor={useColorModeValue("gray.300", "gray.600")} // Adjust start color for light/dark mode
          endColor={useColorModeValue("gray.500", "gray.800")} // Adjust end color for light/dark mode
        />

        {/* Skeleton for Product Details */}
        <VStack flex="1" spacing={6} align="start" w="full">
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            maxW="300px"
            rounded="md"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            w="full"
            height="20px"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
          <SkeletonText
            mt="4"
            noOfLines={3}
            spacing="4"
            w="full"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            maxW="120px"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            w="50px"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
          <Skeleton
            mt="4"
            height="50px"
            w="full"
            rounded="md"
            startColor={useColorModeValue("gray.300", "gray.600")}
            endColor={useColorModeValue("gray.500", "gray.800")}
          />
        </VStack>
      </Flex>
    </Box>
  );
}
