import React from "react";
import {
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  FiShoppingCart,
  FiDollarSign,
  FiUser,
  FiArrowLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate(); // React Router's useNavigate hook

  const bg = useColorModeValue("white", "gray.800"); // Background color based on mode
  const color = useColorModeValue("gray.800", "white"); // Text color based on mode
  const statBg = useColorModeValue("white", "gray.700"); // Stat card background color
  const hoverShadow = useColorModeValue("xl", "dark-lg"); // Hover shadow effect

  // Sample data for bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [5000, 10000, 7000, 12000, 9000],
        backgroundColor: "#0BC5EA", // Bar color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales Overview" },
    },
  };

  return (
    <Box p={5} bg={bg} color={color} minH="100vh">
      {/* Arrow button to navigate to home */}
      <Flex>
        <Button
          leftIcon={<FiArrowLeft />}
          onClick={() => navigate("/products")} // Navigate to home
          mb={6}
          bg="cyan.400"
          color="white"
          _hover={{ bg: "cyan.600" }}
        >
          Go to Website
        </Button>
        <Button ms={4} onClick={toggleColorMode} mb={6}>
          Toggle {useColorModeValue("Dark", "Light")} Mode
        </Button>
      </Flex>

      <Heading as="h1" size="xl" mb={6}>
        Admin Dashboard
      </Heading>

      {/* Statistics Section */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
        <Stat
          p="4"
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={statBg}
          _hover={{ shadow: hoverShadow }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StatLabel>Total Sales</StatLabel>
            <FiDollarSign size={24} color="teal.400" />
          </Box>
          <StatNumber>$35,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            12% this month
          </StatHelpText>
        </Stat>

        <Stat
          p="4"
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={statBg}
          _hover={{ shadow: hoverShadow }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StatLabel>New Customers</StatLabel>
            <FiUser size={24} color="blue.400" />
          </Box>
          <StatNumber>250</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            18% from last month
          </StatHelpText>
        </Stat>

        <Stat
          p="4"
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={statBg}
          _hover={{ shadow: hoverShadow }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StatLabel>Total Orders</StatLabel>
            <FiShoppingCart size={24} color="purple.400" />
          </Box>
          <StatNumber>1,420</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            5% this month
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      {/* Bar Chart Section */}
      <Heading as="h2" size="lg" mb={4}>
        Sales Overview
      </Heading>
      <Box
        p="5"
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={statBg}
        _hover={{ shadow: hoverShadow }}
      >
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
