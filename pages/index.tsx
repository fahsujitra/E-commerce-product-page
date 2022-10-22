import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Hide, Text, Heading, Container, Box, Divider, Flex, HStack, Avatar, VStack,
  Button, ButtonGroup, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MenuIcon, CartIcon } from '../components/icons';
import ProductImage from '../components/productImage';

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [idxImage, setIdxImage] = useState(0);

  // const showLightBox = (e: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => {
  //   e.stopPropagation();
  const showLightBox = (idx: number) => {
    console.log('lightbox', idx);
    setIdxImage(idx);
    onOpen();
  }

  return (
    <div>
      <Head>
        <title>e-commerce-product-page</title>
        <meta name="description" content="e-commerce-product-page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/png" href={`${process.env.basePath}/favicon-32x32.png`} />
      </Head>
      <Container maxW='1440px' centerContent>
        <Hide breakpoint='(min-width: 376px)'>
          <Flex w='100%' h='16' justifyContent='space-between' alignItems='center' >

            <HStack spacing={4}>
              <MenuIcon boxSize={6} mt={3} color='guideblue.300' />
              <Heading fontSize='28px' position="absolute" top="3" left="8" color='guideblue.400'>sneakers</Heading>
            </HStack>

            <HStack spacing={4}>
              <CartIcon boxSize={5} mt={1} color='guideblue.300' />
              <Avatar size='sm' name='Fah Sujitra' src={`${process.env.basePath}/pic8.jpg`} />
            </HStack>

          </Flex>
        </Hide>

        <Hide breakpoint='(max-width: 375px)'>
          <Flex w='100%' h='24' justifyContent='space-between' alignItems='center' >

            <HStack spacing={12}>
              <Heading fontSize='32px' mt={-2} color='guideblue.400'>sneakers</Heading>
              <Text fontSize='18px' color='guideblue.300'>Collections</Text>
              <Text fontSize='18px' color='guideblue.300'>Men</Text>
              <Text fontSize='18px' color='guideblue.300'>Women</Text>
              <Text fontSize='18px' color='guideblue.300'>About</Text>
              <Text fontSize='18px' color='guideblue.300'>Contact</Text>
            </HStack>

            <HStack spacing={12}>
              <CartIcon boxSize={6} color='guideblue.300' />
              <Avatar size='md' name='Fah Sujitra' src={`${process.env.basePath}/pic8.jpg`} />
            </HStack>

          </Flex>
          <Divider />
        </Hide>


        <Container maxW={'80%'} mt={12} centerContent>
          <HStack spacing={20}>

            <Box maxW={'50%'} mb={8}>
              <ProductImage showLightBox={showLightBox} idx={0} />
            </Box>


            <VStack maxW={'40%'} align={'self-start'}>
              <Heading fontSize='16px' color='guideorange.200' pb={6}>SNEAKER COMPANY</Heading>
              <Heading as='b' fontSize='44px' color='guideblue.400'>Fall Limited Edition</Heading>
              <Heading as='b' fontSize='44px' color='guideblue.400' position="relative" top="-3">Sneakers</Heading>
              <Text py={6}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
              </Text>
              <HStack spacing={4} align='center'>
                <Heading fontSize='28px' color='guideblue.400'>$125.00</Heading>
                <Heading as='b' fontSize='16px' color='guideorange.200' bg='guideorange.100' px='2' py={0.5}>50%</Heading>
              </HStack>
              <Heading as='s' fontSize='16px' color='guideblue.200'>$250.00</Heading>
              <HStack py='8' spacing={4}>
                <HStack>
                  <ButtonGroup size='lg' isAttached >
                    <Button size='lg'>
                      <Text fontSize='24px' color='guideorange.200' mt={-1}>-</Text>
                    </Button>
                    <Button size='lg'>
                      <Heading fontSize='16px'>0</Heading>
                    </Button>
                    <Button size='lg'>
                      <Text fontSize='24px' color='guideorange.200' mt={-1}>+</Text>
                    </Button>
                  </ButtonGroup>
                </HStack>
                <Button color='white' bg='guideorange.200' size='lg' px='20' >
                  <Text fontSize='16px'><CartIcon boxSize={4} mr={3} />Add to cart</Text>
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Container>

        {/* closeOnOverlayClick={false} */}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {/* <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          /> */}
          <ModalOverlay
            backdropFilter='auto'
            backdropBrightness='0.5'
          />
          <ModalContent backgroundColor='transparent'>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            {/* <ModalBody> */}

            <ProductImage idx={idxImage} />

            {/* </ModalBody> */}
            {/* <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>


      </Container>

      <footer>

      </footer>
    </div>
  )
}

export default Home;
