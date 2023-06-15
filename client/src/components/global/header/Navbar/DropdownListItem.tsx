import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
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
import useDropdownHover from '../../../../hooks/useDropdownHover';
import { DropdownItem } from '../../../../types';
import { ListItem } from '../../../../hooks/useNavItems';
import DropdownItemText from './DropdownItemText';

type DropDownListItemProps = {
  name: string;
  dropdownItems: DropdownItem[];
  isMobileView: boolean;
};

function DropdownListItem({
  name,
  dropdownItems,
  isMobileView,
}: DropDownListItemProps) {
  const hoverRef = useRef(null);
  const navigate = useNavigate();
  const { isOpen } = useDropdownHover(hoverRef);
  return isMobileView ? (
    <Accordion allowToggle borderStyle="none">
      <AccordionItem>
        <AccordionButton border="none" fontSize="1.1rem" fontWeight="bold">
          <Box textAlign="left" pl="0.5rem">
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          {dropdownItems.map((c) => {
            return (
              <DropdownItemText
                key={uuid()}
                itemData={{
                  href: c.href,
                  id: c.id,
                  name: c.name,
                }}
              />
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ) : (
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
                _hover={{
                  color: '#007aff',
                }}
                onClick={() =>
                  navigate(c.href, {
                    state: {
                      id: c.id,
                      name: c.name,
                    },
                  })
                }
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
