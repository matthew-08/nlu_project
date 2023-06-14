import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

type Props = {
  capabiltiyName: string;
};

function Capability() {
  const { capability } = useParams();
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Flex m="auto" flexDir="column" align="center">
        <Text fontSize="3rem" my="2rem">
          Capabilities/{capability}
        </Text>
        <Button
          onClick={() => navigate('/')}
          w="200px"
          padding="2rem"
          fontSize="1.2rem"
          colorScheme="blue"
        >
          Return to homepage
        </Button>
      </Flex>
    </DefaultLayout>
  );
}

export default Capability;
