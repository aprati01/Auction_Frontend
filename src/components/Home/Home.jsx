import React from 'react';
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
const Home = () => {
 
  return (
    <Flex padding="4rem" alignItems="center" justifyContent="space-between">
      <Image 
        src={ '/Images/Biddingimage.jpg'}
        alt="Auction Illustration" 
        maxWidth="50%"
      />
      <Box maxWidth="40%">
        <Text fontSize="xl" mb={2}>Welcome,</Text>
        <Heading as="h1" fontSize='30px' mb={4}  whiteSpace="nowrap">Decentralized Auction</Heading>
        <Text fontSize="xl" mb={4}>
          Utilizing blockchain for a secure and decentralized auction
        </Text>
        <Button colorScheme="blue" size="lg">Start Bidding</Button>
      </Box>
    </Flex>
  );
};

export default Home;