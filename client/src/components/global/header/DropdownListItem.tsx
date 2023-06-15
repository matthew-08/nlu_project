import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  ListItem,
  Box,
  ListIcon,
  Flex,
  Text,
  Menu,
  MenuItem,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import CustomListItem from './CustomListItem';
// eslint-disable-next-line import/no-named-as-default
import useDropdownHover from '../../../hooks/useDropdownHover';
import { DropdownItem } from '../../../types';

type DropDownListItemProps = {
  name: string;
  dropdownItems: DropdownItem[];
};

function DropdownListItem({ name, dropdownItems }: DropDownListItemProps) {
  const hoverRef = useRef(null);
  const navigate = useNavigate();
  const { isOpen } = useDropdownHover(hoverRef);
  return (
    <Flex align="center" ref={hoverRef} position="relative">
      <CustomListItem name={name} href={`/${name}`} />
      <ChevronDownIcon />
      {isOpen && (
        <Flex
          position="absolute"
          top="10"
          background="gray.200"
          padding="1rem"
          flexDir="column"
          zIndex="200"
          borderRadius="10px"
          gap="1rem"
        >
          {dropdownItems.map((c) => {
            return (
              <Text
                fontSize="1.4rem"
                key={uuid()}
                cursor="pointer"
                onClick={() => navigate(c.href)}
              >
                {c.name}
              </Text>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
}

export default DropdownListItem;
