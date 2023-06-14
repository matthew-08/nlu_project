import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import QuoteFormLayout from '../layouts/QuoteFormLayout';
import useFlavorCategories from '../hooks/useFlavorCategories';
import CategoryCard from '../components/flavors/CategoryCard';

function Flavors() {
  const { categories } = useFlavorCategories();
  return (
    <QuoteFormLayout>
      <Flex flexDir="column" align="center">
        <Heading fontSize="4rem">Flavors</Heading>
        <Flex
          flexWrap="wrap"
          gap="2rem"
          mt="2rem"
          p="1rem"
          overflow="auto"
          align="center"
          justify="center"
        >
          {categories?.map((c) => {
            return <CategoryCard name={c.name} key={c.name} />;
          })}
        </Flex>
      </Flex>
    </QuoteFormLayout>
  );
}

export default Flavors;
