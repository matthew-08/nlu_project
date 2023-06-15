import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  useDisclosure,
  Flex,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import AppLogo from '../../../appLogo/AppLogo';
import { ListItem } from '../../../../hooks/useNavItems';
import CustomListItem from './CustomListItem';
import DropdownListItem from './DropdownListItem';

type Props = {
  listItems: ListItem[];
};

function MobileNav({ listItems }: Props) {
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
          <DrawerBody>
            <Flex flexDir="column">
              {listItems.map((i) => {
                if (i.dropdown && i.dropdownItems) {
                  return (
                    <DropdownListItem
                      key={i.name}
                      dropdownItems={i.dropdownItems}
                      isMobileView
                      name={i.name}
                    />
                  );
                }
                return (
                  <CustomListItem
                    name={i.name}
                    href={i.href}
                    isMobileView
                    key={i.name}
                  />
                );
              })}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              onClick={onClose}
              padding="1rem"
              size="lg"
              m="auto"
              colorScheme="blue"
              width="100%"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;
