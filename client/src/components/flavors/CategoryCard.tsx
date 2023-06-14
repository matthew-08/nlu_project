import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MdEmojiFoodBeverage } from 'react-icons/md';

type Props = {
  name: string;
};

function CategoryCard({ name }: Props) {
  return (
    <Flex
      border="2px"
      minW="200px"
      minH="150px"
      flexDir="column"
      align="center"
      className="category-card"
    >
      <MdEmojiFoodBeverage size="100" />
      <Text mt="auto" mx="auto" fontSize="1.0rem">
        {name}
      </Text>
    </Flex>
  );
}

export default CategoryCard;
