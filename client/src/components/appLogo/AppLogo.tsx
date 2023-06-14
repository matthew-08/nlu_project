import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { MdFoodBank } from 'react-icons/md';

type Props = {
  size: `${string}rem`;
};
function AppLogo({ size }: Props) {
  return (
    <Flex align="center" gap="1rem">
      <Heading color="blue.500" fontSize={size}>
        Flavors App
      </Heading>
      <MdFoodBank size={size} color="#3182ce" />
    </Flex>
  );
}

export default AppLogo;
