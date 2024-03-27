import React from "react";
import { Box, Heading, Text, Stack, Container, Button, Flex, Image, Icon, SimpleGrid, Link } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaUsers, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" size="lg">
              Code Architects
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#services">Services</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">
              Building Innovative Software Solutions
            </Heading>
            <Text fontSize="xl" maxW="600px">
              We are a team of skilled software engineers dedicated to crafting high-quality software solutions for businesses of all sizes.
            </Text>
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Our Services
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Custom Software Development
              </Heading>
              <Text>We develop tailored software solutions to meet your unique business requirements.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaLaptopCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Web Application Development
              </Heading>
              <Text>We build robust and scalable web applications using modern technologies and frameworks.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaUsers} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Team Augmentation
              </Heading>
              <Text>We provide skilled software engineers to augment your existing team and accelerate your projects.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={["column", "row"]}>
            <Box flex={1} mr={[0, 10]}>
              <Heading as="h2" size="xl" mb={4}>
                About Code Architects
              </Heading>
              <Text mb={6}>Code Architects is a leading software development company with a passion for building innovative solutions. Our team of experienced software engineers combines technical expertise with a deep understanding of business needs to deliver high-quality software products.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTE1NzU1MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development Team" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Contact Us
          </Heading>
          <Stack spacing={6} maxW="600px" mx="auto">
            <Flex align="center">
              <Icon as={FaEnvelope} boxSize={6} color="blue.500" mr={4} />
              <Link href="mailto:info@codearchitects.com">info@codearchitects.com</Link>
            </Flex>
            <Button colorScheme="blue" size="lg">
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={4} align="center">
            <Text>&copy; {new Date().getFullYear()} Code Architects</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
