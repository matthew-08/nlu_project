import { Heading, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import AppSlider from '../components/home/Slider/AppSlider';
import QuoteForm from '../components/global/quoteForm/QuoteForm';

export default function Home() {
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  return (
    <DefaultLayout>
      <AppSlider />
      <Flex
        as="section"
        mt="3rem"
        flexDir={isSmallerThan900 ? 'column' : 'row'}
      >
        <Flex flexDir="column" maxW="100%">
          <Heading fontSize={['3.2rem', '3.5rem']} mb="2rem">
            Design. Manufacture. Deliver.
          </Heading>
          <Text
            fontSize="1.3rem"
            maxW={['100%', '100%', '85%', '70%']}
            mb="2rem"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            nobis! Aspernatur ipsa a, repellat architecto quam labore tenetur
            nulla laborum reiciendis impedit voluptatum vitae accusamus tempora
            recusandae natus perferendis accusantium debitis sit facilis sunt
            ea? Obcaecati error accusantium nam praesentium molestias totam
            minima quibusdam. Non dicta laboriosam sapiente ducimus laborum
            expedita, reiciendis molestias consequuntur cum molestiae quia
            blanditiis necessitatibus animi? Non dicta laboriosam sapiente
            ducimus laborum expedita, reiciendis molestias consequuntur cum
            molestiae quia blanditiis necessitatibus animi?
          </Text>
        </Flex>
        <Flex m="auto" mt={['2rem']}>
          <QuoteForm />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
