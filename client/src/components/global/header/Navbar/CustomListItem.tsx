/* eslint-disable react/require-default-props */
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type CustomListItemProps = {
  name: string;
  href: `/${string}`;
  isMobileView?: boolean;
};

function CustomListItem({ name, href, isMobileView }: CustomListItemProps) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(href);
  return isMobileView ? (
    <Button
      as="button"
      size="lg"
      cursor="pointer"
      justifyContent="flex-start"
      variant="ghost"
      width="100%"
      onClick={handleNavigate}
      rightIcon={<ChevronRightIcon />}
    >
      {name}
    </Button>
  ) : (
    <Text
      className="nav-item"
      as="a"
      cursor="pointer"
      fontSize="1.5rem"
      onClick={handleNavigate}
    >
      {name}
    </Text>
  );
}

export default CustomListItem;
