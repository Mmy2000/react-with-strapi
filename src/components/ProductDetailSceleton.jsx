import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

export default function ProductDetailSceleton() {
  return (
    <Box padding="5" boxShadow="lg" bg="gray.600" rounded={"lg"}>
      <Skeleton height="200px"></Skeleton>
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        maxW={"200px"}
        mx={"auto"}
      />
      <SkeletonText mt="4" noOfLines={3} spacing="4" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" mx={'auto'} maxW={"120px"} />
      <SkeletonText
        mt="4"
        height="50px"
        noOfLines={1}
        spacing="4"
        w={"full"}
        rounded={"lg"}
      />
    </Box>
  );
}


