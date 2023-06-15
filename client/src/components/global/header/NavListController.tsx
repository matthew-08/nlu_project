import { Flex, Heading, List, Text, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import useNavItems from '../../../hooks/useNavItems';
import APP_CAPABILITIES from '../../../utils/capabilites';
import CustomListItem from './CustomListItem';
import DropdownListItem from './DropdownListItem';
import MobileNav from './MobileNav';

type ListItem = {
  dropdown: boolean;
  name: string;
  href: `/${string}`;
  dropdownItems?: readonly string[] | string[];
};

function NavListController() {
  const navigate = useNavigate();
  const [isSmallerThan800] = useMediaQuery('(max-width: 900px)');
  const { listItems } = useNavItems();
  return (
    <Flex gap={['2rem', '4rem', '6rem']}>
      {isSmallerThan800 ? (
        <MobileNav />
      ) : (
        listItems.map((item, index) => {
          if (item.dropdown && item.dropdownItems) {
            return (
              <DropdownListItem
                key={uuid()}
                dropdownItems={item.dropdownItems}
                name={item.name}
              />
            );
          }
          return (
            <CustomListItem href={item.href} name={item.name} key={uuid()} />
          );
        })
      )}
    </Flex>
  );
}

export default NavListController;
