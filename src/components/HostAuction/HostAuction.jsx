import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';

const HostAuction = () => {
  const [sellerName, setSellerName] = useState('');
  const [cropName, setCropName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');

  const handleSellerNameChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase
    setSellerName(value);
  };

  const handleCropNameChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase
    setCropName(value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file.type !== 'image/png') {
      setImageError('Only .png format is accepted.');
      return;
    }
    if (file.size > 150 * 1024) {
      setImageError('Max size of the image is 150KB.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Image size should be less than 150KB.',
      });
      return;
    }
    setImageError('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sellerName.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seller Name field is required.',
      });
      return;
    }
    if (cropName.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Crop Name field is required.',
      });
      return;
    }
    if (!startTime) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bidding Start Time is required.',
      });
      return;
    }
    if (!endTime) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bidding End Time is required.',
      });
      return;
    }
    if (!image) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please upload a crop image.',
      });
      return;
    }

    // If all validations pass, send data to the backend
    console.log('Form submitted successfully!');
    setSellerName('');
    setCropName('');
    setStartTime('');
    setEndTime('');
    setImage(null);
    setImageError('');
  };

  return (
    <div className="container" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <div className="row">
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-6">
          <div className="form pl-3 pr-3">
            <Heading as="h4" size="md" textAlign="center" mb={4}>
              <b>Host Auction Form</b>
            </Heading>
            <hr />
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={sellerName.trim() === ''}>
                <FormLabel fontSize={'14px'}>
                  Seller Name{' '}
                  <sup>
                    <span style={{ color: 'red' }}>*</span>
                  </sup>
                </FormLabel>
                <Input
                  type="text"
                  value={sellerName}
                  placeholder="Enter Seller Name"
                  onChange={handleSellerNameChange}
                />
                {sellerName.trim() !== '' ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={cropName.trim() === ''} mt={4}>
                <FormLabel fontSize={'14px'}>
                  Crop Name{' '}
                  <sup>
                    <span style={{ color: 'red' }}>*</span>
                  </sup>
                </FormLabel>
                <Input
                  type="text"
                  value={cropName}
                  placeholder="Enter Crop Name"
                  onChange={handleCropNameChange}
                />
                {cropName.trim() !== '' ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!startTime} mt={4}>
                <FormLabel fontSize={'14px'}>
                  Bidding Start Time{' '}
                  <sup>
                    <span style={{ color: 'red' }}>*</span>
                  </sup>
                </FormLabel>
                <Input
                  type="datetime-local"
                  value={startTime}
                  placeholder="Enter Bidding Start Time"
                  onChange={handleStartTimeChange}
                />
                {startTime ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage ml={1}>Bidding Start Time is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!endTime} mt={4}>
                <FormLabel fontSize={'14px'}>
                  Bidding End Time{' '}
                  <sup>
                    <span style={{ color: 'red' }}>*</span>
                  </sup>
                </FormLabel>
                <Input
                  type="datetime-local"
                  value={endTime}
                  placeholder="Enter Bidding End Time"
                  onChange={handleEndTimeChange}
                />
                {endTime ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage ml={1}>Bidding End Time is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={'14px'}>
                  Upload Crop Image{' '}
                  <sup>
                    <span style={{ color: 'red' }}>*</span>
                  </sup>
                </FormLabel>
                <Input type="file" onChange={handleImageUpload} accept=".png" />
                {imageError && (
                  <FormErrorMessage ml={1}>{imageError}</FormErrorMessage>
                )}
              </FormControl>
              {image && <img src={image} alt="Crop" className="uploaded-image" />}
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAuction;
