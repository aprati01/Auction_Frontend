import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewAuction from './components/ViewAuction/ViewAuction';
import ViewBid from './components/ViewBid/ViewBid';
import HostAuction from './components/HostAuction/HostAuction';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ViewAuction" element={<ViewAuction />} />
            {/* <Route path="/ViewBid"  element={<ViewBid/>}/> */}
            <Route path="/HostAuction" element={<HostAuction/>}/>
          {/* Add routes for other components here */}
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
