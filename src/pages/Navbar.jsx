import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-3xl font-bold`} style={{ color: textColor }}>
          My App
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `font-bold`
                : `hover:text-blue-600 transition duration-300`
            }
            style={{ color: textColor }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `font-bold`
                : `hover:text-blue-600 transition duration-300`
            }
            style={{ color: textColor }}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? `font-bold`
                : `hover:text-blue-600 transition duration-300`
            }
            style={{ color: textColor }}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `font-bold`
                : `hover:text-blue-600 transition duration-300`
            }
            style={{ color: textColor }}
          >
            Contact
          </NavLink>
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-center ">
          <div className="hidden md:block">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 shadow-lg"
                  : "bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
              }
            >
              Login
            </NavLink>
          </div>
          <Button className="mx-2" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar
                  size={"2xl"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 hover:bg-blue-50 transition duration-300"
            }
            style={{ color: textColor }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 hover:bg-blue-50 transition duration-300"
            }
            style={{ color: textColor }}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 hover:bg-blue-50 transition duration-300"
            }
            style={{ color: textColor }}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 hover:bg-blue-50 transition duration-300"
            }
            style={{ color: textColor }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "block bg-blue-700 text-white text-center px-4 py-2 mt-2 rounded-md"
                : "block bg-blue-600 text-white text-center px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition duration-300"
            }
          >
            Login
          </NavLink>
        </div>
      )}
    </Box>
  );
}

// "use client";

// import {
//   Box,
//   Flex,
//   Avatar,
//   Text,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   HStack,
//   Link
// } from "@chakra-ui/react";
// import {Link as RouterLink} from 'react-router-dom'
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// const Links = ["Products", "About", "Contact"];
// const NavLink = ({ children }) => {
//   return (
//     <Link
//       as={RouterLink}
//       px={2}
//       py={1}
//       rounded={"md"}
//       _hover={{
//         textDecoration: "none",
//         bg: useColorModeValue("gray.200", "gray.700"),
//       }}
//       to={children.toLowerCase()}
//     >
//       {children}
//     </Link>
//   );
// };

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <Box>Logo</Box>
//           <HStack spacing={8} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>

//           <Flex alignItems={"center"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//               <Stack
//                 flex={{ base: 1, md: 0 }}
//                 justify={"flex-end"}
//                 direction={"row"}
//                 spacing={6}
//               >
//                 <NavLink to="/login">Login</NavLink>
//                 <NavLink to="/regsiter">Register</NavLink>
//               </Stack>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={"full"}
//                   variant={"link"}
//                   cursor={"pointer"}
//                   minW={0}
//                 >
//                   <Avatar
//                     size={"sm"}
//                     src={"https://avatars.dicebear.com/api/male/username.svg"}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={"center"}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={"2xl"}
//                       src={"https://avatars.dicebear.com/api/male/username.svg"}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
