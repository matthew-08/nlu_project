import { useState } from 'react';
import APP_CAPABILITIES from '../utils/capabilites';

type DropdownItem = {
  id?: number;
  href: string;
  name: string;
};

type ListItem = {
  dropdown: boolean;
  name: string;
  href: `/${string}`;
  dropdownItems?: DropdownItem[];
};
const useNavItems = () => {
  const [listItems, setListItems] = useState<ListItem[]>([
    {
      dropdown: true,
      href: '/capabilities',
      name: 'Capabilities',
      dropdownItems: APP_CAPABILITIES.map((item) => {
        return {
          name: 'item',
          href: `/capabilities/${item}`,
        };
      }),
    },
    {
      dropdown: true,
      href: '/categories',
      name: 'Flavors',
      dropdownItems: [],
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
};
