import { Flex } from '@chakra-ui/react';
import NavListController from './NavListController';

function Navbar() {
  return (
    <Flex
      as="nav"
      backgroundColor="white"
      h="50px"
      mt="auto"
      minW="100%"
      border="2px"
      borderRadius="10px"
      borderColor="gray.400"
      justify="center"
      align="center"
    >
      <NavListController />
    </Flex>
  );
}

export default Navbar;
