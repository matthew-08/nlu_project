import { Flex, Text } from '@chakra-ui/react';
import { MdCopyright } from 'react-icons/md';

const fontSize = ['0.9rem', '1.1rem', '1.5rem'];

function CopyrightLogo() {
  const currentYear = new Date().getFullYear();
  return (
    <Flex align="center">
      <Text mr="0.2rem" fontSize={fontSize}>
        Copyright
      </Text>
      <MdCopyright />
      <Text ml="0.2rem" fontSize={fontSize} mt="0.1rem">
        {currentYear}. All rights reserved.
      </Text>
    </Flex>
  );
}

export default CopyrightLogo;
