import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Sceleton() {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      bg={useColorModeValue("gray.200", "gray.700")} // Adjust background for light/dark mode
      rounded={"lg"}
    >
      <SkeletonCircle size="40" mx={"auto"} />
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        w={20}
        mx={"auto"}
        startColor={useColorModeValue("gray.300", "gray.600")} // Adjust start color for light/dark mode
        endColor={useColorModeValue("gray.500", "gray.800")} // Adjust end color for light/dark mode
      />
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        startColor={useColorModeValue("gray.300", "gray.600")}
        endColor={useColorModeValue("gray.500", "gray.800")}
      />
      <Flex justifyContent={"space-between"}>
        <SkeletonText
          mt="4"
          w={20}
          noOfLines={1}
          spacing="4"
          startColor={useColorModeValue("gray.300", "gray.600")}
          endColor={useColorModeValue("gray.500", "gray.800")}
        />
        <SkeletonText
          mt="4"
          w={20}
          noOfLines={1}
          spacing="4"
          startColor={useColorModeValue("gray.300", "gray.600")}
          endColor={useColorModeValue("gray.500", "gray.800")}
        />
      </Flex>
      <SkeletonText
        mt="4"
        w={20}
        noOfLines={1}
        spacing="4"
        startColor={useColorModeValue("gray.300", "gray.600")}
        endColor={useColorModeValue("gray.500", "gray.800")}
      />
      <SkeletonText
        mt="4"
        w={20}
        noOfLines={1}
        spacing="4"
        startColor={useColorModeValue("gray.300", "gray.600")}
        endColor={useColorModeValue("gray.500", "gray.800")}
      />
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        startColor={useColorModeValue("gray.300", "gray.600")}
        endColor={useColorModeValue("gray.500", "gray.800")}
      />
    </Box>
  );
}
