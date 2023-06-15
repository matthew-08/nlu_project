import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
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
  const { isOpen } = useDropdownHover(hoverRef);
  return isMobileView ? (
    <Accordion allowToggle borderStyle="none">
      <AccordionItem border="none">
        <AccordionButton fontSize="1.1rem" fontWeight="bold">
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
        </Flex>
      )}
    </Flex>
  );
}

export default DropdownListItem;
