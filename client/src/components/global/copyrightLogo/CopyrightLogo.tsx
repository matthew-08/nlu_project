import { Flex, Text } from '@chakra-ui/react';
import { MdCopyright } from 'react-icons/md';

function CopyrightLogo() {
  const currentYear = new Date().getFullYear();
  return (
    <Flex align="center">
      <Text mr="0.2rem">Copyright </Text>
      <MdCopyright />
      <Text ml="0.2rem">{currentYear}. All rights reserved.</Text>
    </Flex>
  );
}

export default CopyrightLogo;
