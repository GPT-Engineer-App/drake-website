import { Box, Flex, Heading, Text, VStack, Link, SimpleGrid, Container } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaSpotify, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="black" color="brand.text" minHeight="100vh">
        <VStack spacing={10} p={10} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color="brand.text">Drake</Heading>
          <Text fontSize="xl" color="brand.text">Canadian Rapper, Singer, and Songwriter</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={10}>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" color="brand.text">Biography</Heading>
            <Text color="brand.text">Aubrey Drake Graham, known mononymously as Drake, is a Canadian rapper, singer, and songwriter. He first gained recognition as an actor on the teen drama television series Degrassi: The Next Generation.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" color="brand.text">Music</Heading>
            <Link href="#" color="gold" isExternal>Listen on Spotify <FaSpotify /></Link>
            <Text color="brand.text">Explore Drake's music including the latest albums and hit singles.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" color="brand.text">Tour Dates</Heading>
            <Text color="brand.text">Check out the upcoming tour dates and live performances.</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" color="brand.text">Contact</Heading>
            <Link href="mailto:info@drakeofficial.com" color="gold"><FaEnvelope /> info@drakeofficial.com</Link>
            <Flex>
              <Link href="#" color="gold" p={2}><FaInstagram /></Link>
              <Link href="#" color="gold" p={2}><FaTwitter /></Link>
            </Flex>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;