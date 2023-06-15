import { Text, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import ReturnHomeBtn from '../components/global/ReturnHomeBtn';

function Capability() {
  const { capability } = useParams();
  return (
    <DefaultLayout>
      <Flex m="auto" flexDir="column" align="center">
        <Text fontSize={['2rem', '2.2rem', '3rem']} my="2rem">
          Capabilities/{capability}
        </Text>
        <ReturnHomeBtn />
      </Flex>
    </DefaultLayout>
  );
}

export default Capability;
