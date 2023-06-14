import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
  id: number;
};

function CategoryCard({ name, id }: Props) {
  const navigate = useNavigate();
  return (
    <Flex
      border="2px"
      minW="200px"
      minH="150px"
      flexDir="column"
      align="center"
      className="category-card"
      onClick={() =>
        navigate(`/flavors/${name.replace(/\s+/g, '-').toLowerCase()}`, {
          state: { id, name },
        })
      }
    >
      <MdEmojiFoodBeverage size="100" />
      <Text mt="auto" mx="auto" fontSize="1.0rem">
        {name}
      </Text>
    </Flex>
  );
}

export default CategoryCard;
