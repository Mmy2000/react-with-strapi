import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">BrandName</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600 transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600 transition duration-300"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Call to Action */}
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
                : "block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 text-blue-600"
                : "block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/get-started"
            className={({ isActive }) =>
              isActive
                ? "block bg-blue-700 text-white text-center px-4 py-2 mt-2 rounded-md"
                : "block bg-blue-600 text-white text-center px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition duration-300"
            }
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
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
