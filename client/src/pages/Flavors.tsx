import { Heading, Flex } from '@chakra-ui/react';
import QuoteFormLayout from '../layouts/QuoteFormLayout';
import useFlavorCategories from '../hooks/useFlavorCategories';
import CategoryCard from '../components/flavors/CategoryCard';

function Flavors() {
  const { categories } = useFlavorCategories();
  return (
    <QuoteFormLayout>
      <Flex flexDir="column" align="center" as="main">
        <Heading fontSize="4rem" mr={['0', '0', '0', 'auto']} ml="0.5rem">
          Flavors
        </Heading>
        <Flex
          flexWrap="wrap"
          gap="2rem"
          mt="2rem"
          p="1rem"
          overflow="auto"
          align="center"
          justify={['center', 'center', 'flex-start']}
        >
          {categories?.map((c) => {
            return <CategoryCard name={c.name} id={c.id} key={c.name} />;
          })}
        </Flex>
      </Flex>
    </QuoteFormLayout>
  );
}

export default Flavors;
