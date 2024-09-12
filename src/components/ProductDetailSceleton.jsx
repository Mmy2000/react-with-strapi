import { Box, Flex, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";
import React from "react";

export default function ProductDetailSceleton() {
  return (
    <Box
      padding="5"
      boxShadow="lg"
      bg="gray.200"
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
        />

        {/* Skeleton for Product Details */}
        <VStack flex="1" spacing={6} align="start" w="full">
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            maxW="300px"
            rounded="md"
          />
          <SkeletonText mt="4" noOfLines={1} spacing="4" w="full" height={'20px'} />
          <SkeletonText mt="4" noOfLines={3} spacing="4" w="full" />
          <SkeletonText mt="4" noOfLines={1} spacing="4" maxW="120px" />
          <SkeletonText mt="4" noOfLines={1} spacing="4" w="50px" />
          <Skeleton mt="4" height="50px" w="full" rounded="md" />
        </VStack>
      </Flex>
    </Box>
  );
}
