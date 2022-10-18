import type { NextPage } from 'next';
import Head from 'next/head';
import { Hide, Text, Heading, Container, Box, Divider, Flex, HStack, Avatar, VStack, Center, Image, Grid, GridItem, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { MenuIcon, CartIcon } from '../components/icons';

const Home: NextPage = () => {
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


        <Container maxW={'90%'} mt={12} centerContent>
          <HStack spacing={20}>
            <VStack maxW={'50%'} spacing={8} mb={8}>
              <Image src={`${process.env.basePath}/images/image-product-1.jpg`} alt='image-product-1' w={'100%'} borderRadius='md' />
              <HStack spacing={8}>
                <Box>
                  <Image src={`${process.env.basePath}/images/image-product-1-thumbnail.jpg`} alt='image-product-1' borderRadius='md' />
                </Box>
                <Box>
                  <Image src={`${process.env.basePath}/images/image-product-2-thumbnail.jpg`} alt='image-product-2' borderRadius='md' />
                </Box>
                <Box>
                  <Image src={`${process.env.basePath}/images/image-product-3-thumbnail.jpg`} alt='image-product-3' borderRadius='md' />
                </Box>
                <Box>
                  <Image src={`${process.env.basePath}/images/image-product-4-thumbnail.jpg`} alt='image-product-4' borderRadius='md' />
                </Box>
              </HStack>
            </VStack>

            <VStack maxW={'40%'} align={'self-start'}>
              <Heading fontSize='14px' color='guideorange.200' pb={6}>SNEAKER COMPANY</Heading>
              <Heading as='b' fontSize='40px' color='guideblue.400'>Fall Limited Edition</Heading>
              <Heading as='b' fontSize='40px' color='guideblue.400' position="relative" top="-3">Sneakers</Heading>
              <Text py={8}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
              </Text>
              <HStack spacing={4}>
                <Heading fontSize='22px' color='guideblue.400'>$125.00</Heading>
                <Text as='b' fontSize='12px' color='guideorange.200' bg='guideorange.100' px='1'>50%</Text>
              </HStack>
              <Heading as='s' fontSize='14px' color='guideblue.200'>$250.00</Heading>
              <HStack py='8'>
                <HStack>
                  <Button size='lg'>
                    <Text fontSize='16px'>-</Text>
                  </Button>
                  <Text>0</Text>
                  <Button size='lg'>
                    <Text fontSize='16px'>+</Text>
                  </Button>
                </HStack>
                <Button color='white' bg='guideorange.200' size='lg' px='20'>
                  <Text fontSize='16px'><CartIcon boxSize={6} mr={4} />   Add to cart</Text>
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Container>


      </Container>

      <footer>

      </footer>
    </div>
  )
}

export default Home;
