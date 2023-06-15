import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

type Props = {
  itemData: {
    href: string;
    id?: number;
    name: string;
  };
};

function DropdownItemText({ itemData }: Props) {
  const navigate = useNavigate();
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
        navigate(itemData.href, {
          state: {
            id: itemData.id,
            name: itemData.name,
          },
        })
      }
    />
  );
}
export default DropdownItemText;
