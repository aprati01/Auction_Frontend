// src/components/Footer.js
import React from 'react';
import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.700" color="white" py={4} mt={8}>
      <Flex justify="center">
        <Text>
          &copy; {new Date().getFullYear()} Decentralized Auction. All rights reserved. 
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
