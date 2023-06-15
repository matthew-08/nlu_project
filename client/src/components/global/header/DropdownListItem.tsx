import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  ListItem,
  Box,
  Grid,
  ListIcon,
  Flex,
  Text,
  Menu,
  MenuItem,
  GridItem,
  SimpleGrid,
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
  console.log(dropdownItems);
  return (
    <Flex align="center" ref={hoverRef} position="relative">
      <CustomListItem name={name} href={`/${name}`} />
      <ChevronDownIcon />
      {isOpen && (
        <Flex
          flexDir="column"
          position="absolute"
          top="10"
          background="gray.200"
          padding="1rem"
          zIndex="200"
          borderRadius="10px"
          whiteSpace="nowrap"
          gap="0.5rem"
        >
          {dropdownItems.map((c) => {
            return (
              <Text
                fontSize="1.4rem"
                mr="2rem"
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
