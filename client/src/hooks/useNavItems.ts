import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { list } from '@chakra-ui/react';
import APP_CAPABILITIES from '../utils/capabilites';
import { DropdownItem } from '../types';
import capitalize from '../utils/capitalize';
import appFetch from '../utils/appFetch';

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
          name: capitalize(item),
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
  const fetchCategories = async () => {
    const cats = await appFetch({
      method: 'GET',
      path: '/api/categories',
    }).then((r) => r.json());
    const updatedState = listItems.map((i) => {
      if (i.name === 'Flavors') {
        return {
          ...i,
          dropdownItems: cats,
        };
      }
      return i;
    });
    setListItems([...updatedState]);
  };
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { listItems };
};

export default useNavItems;
