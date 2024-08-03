// src/components/Navbar.js
import React from 'react';
import { Flex, Box, Heading, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'; 
const Navbar = () => {
  
  return (
    <Flex
      as="nav"
      bg="blue.700"
      color="white"
      padding="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Heading size="lg" color="white">Decentralized Auction</Heading>
      </Box>
      <Flex>
        {[
          { name: 'Home', path: '/' },
          { name: 'View bid', path: '/ViewBid' },
          { name:'View Auction', path:'/ViewAuction'},
          { name: 'Host auction', path: '/HostAuction' }
        ].map((link, index) => (
          <Link
            as={RouterLink}
            key={index}
            to={link.path}
            mx="2"
            color="white"
            _hover={{ textDecoration: 'none', color: 'gray.300' }}
          >
            {link.name}
          </Link>
        ))}
      </Flex>
      <Button colorScheme="teal" as={RouterLink} to="/payment">Payment</Button>
    </Flex>
  );
};

export default Navbar;
