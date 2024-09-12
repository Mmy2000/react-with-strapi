import {
  Box,
  Stack,
  Link,
  Text,
  IconButton,
  HStack,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxW="container.xl" py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          mb={10}
          spacing={12}
        >
          {/* Company Info */}
          <Stack spacing={4} flex="1">
            <Heading size="lg">Your Company</Heading>
            <Text
              fontSize="md"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Leading the industry with top-notch products and unparalleled
              services. Discover more about our story and our commitment to
              excellence.
            </Text>
            <HStack spacing={4}>
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "facebook.500", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "twitter.400", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "pink.500", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "linkedin.500", color: "white" }}
              />
            </HStack>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={6} flex="1">
            <Heading size="sm">Quick Links</Heading>
            <Stack spacing={2}>
              <Link href="/" _hover={{ textDecoration: "underline" }}>
                Home
              </Link>
              <Link href="/about" _hover={{ textDecoration: "underline" }}>
                About Us
              </Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>
                Services
              </Link>
              <Link href="/products" _hover={{ textDecoration: "underline" }}>
                Products
              </Link>
              <Link href="/contact" _hover={{ textDecoration: "underline" }}>
                Contact Us
              </Link>
            </Stack>
          </Stack>

          {/* Support */}
          <Stack spacing={6} flex="1">
            <Heading size="sm">Support</Heading>
            <Stack spacing={2}>
              <Link href="#" _hover={{ textDecoration: "underline" }}>
                FAQs
              </Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>
                Help Center
              </Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>
                Privacy Policy
              </Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </Flex>

        <Divider
          borderColor={useColorModeValue("gray.200", "gray.700")}
          mb={6}
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          fontSize="sm"
        >
          <Text>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
          <Link
            href="#"
            color={useColorModeValue("blue.500", "blue.300")}
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
