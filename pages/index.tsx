import type { NextPage } from 'next';
import Head from 'next/head';
import { Show, Hide, Text, Heading, Container, Box, Divider, Flex, HStack, Avatar, VStack } from '@chakra-ui/react';
import React from 'react';
import { MenuIcon, CartIcon } from '../components/icons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>e-commerce-product-page</title>
        <meta name="description" content="e-commerce-product-page" />
        <link rel="icon" href="/favicon.ico" />
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
              <Avatar size='sm' name='Fah Sujitra' src='pic8.jpg' />
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
              <Avatar size='md' name='Fah Sujitra' src='pic8.jpg' />
            </HStack>

          </Flex>
          <Divider />
        </Hide>




      </Container>

      <footer>

      </footer>
    </div>
  )
}

export default Home
