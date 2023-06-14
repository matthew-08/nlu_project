import { Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type CustomListItemProps = {
  name: string;
  href: `/${string}`;
};

function CustomListItem({ name, href }: CustomListItemProps) {
  const navigate = useNavigate();
  return (
    <Text
      className="nav-item"
      as="a"
      cursor="pointer"
      fontSize="1.5rem"
      onClick={() => navigate(href)}
    >
      {name}
    </Text>
  );
}

export default CustomListItem;
