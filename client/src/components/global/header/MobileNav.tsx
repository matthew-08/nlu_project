import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import {
  Drawer,
  useDisclosure,
  Text,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import AppLogo from '../../appLogo/AppLogo';

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HamburgerIcon
        width="40px"
        height="40px"
        color="blue.400"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} isFullHeight placement="right">
        <DrawerOverlay />
        <DrawerContent flexDir="column">
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader>
            <AppLogo headingSize="3rem" logoSize="3rem" />
          </DrawerHeader>
          <DrawerBody />

          <DrawerFooter>
            <Button onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;
