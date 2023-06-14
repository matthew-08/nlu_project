import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { MdFoodBank } from 'react-icons/md';

type SizeOptions = `${string}rem` | `${string}rem`[];

type Props = {
  headingSize: SizeOptions;
  logoSize: SizeOptions;
};
function AppLogo({ headingSize, logoSize }: Props) {
  return (
    <Flex align="center" justify="center">
      <Heading color="blue.500" fontSize={headingSize}>
        Logo
      </Heading>
      <Flex width={logoSize}>
        <MdFoodBank size="100%" color="#3182ce" />
      </Flex>
    </Flex>
  );
}

export default AppLogo;
