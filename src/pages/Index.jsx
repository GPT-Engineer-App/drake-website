import { Box, Flex, Heading, Text, VStack, Link, SimpleGrid, Container } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaSpotify, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="black" color="brand.pink" minHeight="100vh">
        <VStack spacing={10} p={10} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold">Drake</Heading>
          <Text fontSize="xl">Canadian Rapper, Singer, and Songwriter</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={10}>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg">Biography</Heading>
            <Text>Aubrey Drake Graham, known mononymously as Drake, is a Canadian rapper, singer, and songwriter. He first gained recognition as an actor on the teen drama television series Degrassi: The Next Generation.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg">Music</Heading>
            <Link href="#" color="brand.pink" isExternal>Listen on Spotify <FaSpotify /></Link>
            <Text>Explore Drake's music including the latest albums and hit singles.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg">Tour Dates</Heading>
            <Text>Check out the upcoming tour dates and live performances.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg">Contact</Heading>
            <Link href="mailto:info@drakeofficial.com" color="brand.pink"><FaEnvelope /> info@drakeofficial.com</Link>
            <Flex>
              <Link href="#" color="brand.pink" p={2}><FaInstagram /></Link>
              <Link href="#" color="brand.pink" p={2}><FaTwitter /></Link>
            </Flex>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;