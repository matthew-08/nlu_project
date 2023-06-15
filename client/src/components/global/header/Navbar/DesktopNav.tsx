import React from 'react';
import { v4 as uuid } from 'uuid';
import { Flex } from '@chakra-ui/react';
import { ListItem } from '../../../../hooks/useNavItems';
import DropdownListItem from './DropdownListItem';
import CustomListItem from './CustomListItem';

type Props = {
  listItems: ListItem[];
};

function DesktopNav({ listItems }: Props) {
  return (
    <Flex gap={['2rem', '4rem', '6rem']}>
      {listItems.map((item, index) => {
        if (item.dropdown && item.dropdownItems) {
          return (
            <DropdownListItem
              key={uuid()}
              isMobileView={false}
              dropdownItems={item.dropdownItems}
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

export default DesktopNav;
