import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import useNavListItems from '../../../hooks/useNavListItems';
import APP_CAPABILITIES from '../../../utils/capabilites';
import CustomListItem from './CustomListItem';
import DropdownListItem from './DropdownListItem';

type ListItem = {
  dropdown: boolean;
  name: string;
  href: `/${string}`;
  dropdownItems?: readonly string[] | string[];
};

function NavListController() {
  const navigate = useNavigate();
  const [listItems, setListItems] = useState<ListItem[]>([
    {
      dropdown: true,
      href: '/capabilities',
      name: 'Capabilities',
      dropdownItems: APP_CAPABILITIES,
    },
    {
      dropdown: true,
      href: '/categories',
      name: 'Flavors',
      dropdownItems: ['test'],
    },
    {
      dropdown: false,
      href: '/about',
      name: 'About us',
    },
    {
      dropdown: false,
      href: '/contact',
      name: 'Contact',
    },
  ]);
  return (
    <Flex gap="8rem">
      {listItems.map((item, index) => {
        if (item.dropdown && item.dropdownItems) {
          return (
            <DropdownListItem
              key={uuid()}
              dropdownContent={item.dropdownItems}
              name={item.name}
            />
          );
        }
        return (
          <CustomListItem href={item.href} name={item.name} key={uuid()} />
        );
      })}
    </Flex>
  );
}

export default NavListController;
