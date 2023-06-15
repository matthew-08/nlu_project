import {
  Flex,
  Heading,
  list,
  List,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import useNavItems from '../../../../hooks/useNavItems';
import APP_CAPABILITIES from '../../../../utils/capabilites';
import CustomListItem from './CustomListItem';
import DesktopNav from './DesktopNav';
import DropdownListItem from './DropdownListItem';
import MobileNav from './MobileNav';

type ListItem = {
  dropdown: boolean;
  name: string;
  href: `/${string}`;
  dropdownItems?: readonly string[] | string[];
};

function NavListController() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 900px)');
  const { listItems } = useNavItems();
  return (
    <Flex gap={['2rem', '4rem', '6rem']}>
      {isSmallerThan800 ? (
        <MobileNav listItems={listItems} />
      ) : (
        <DesktopNav listItems={listItems} />
      )}
    </Flex>
  );
}

export default NavListController;
