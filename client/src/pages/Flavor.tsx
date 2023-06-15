/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Text, Flex, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import useFlavorCategory from '../hooks/useFlavorCategory';
import QuoteFormLayout from '../layouts/QuoteFormLayout';

function Flavor() {
  const { state } = useLocation();
  const { flavors, handleFetchFlavors } = useFlavorCategory({
    id: state.id || '',
  });
  useEffect(() => {
    if (state.id) {
      handleFetchFlavors(state.id);
    }
  }, [state]);
  return (
    <QuoteFormLayout>
      <Flex flexDir="column" width="100%">
        <Heading mb="2rem">{state.name}</Heading>
        <UnorderedList
          style={{
            display: 'flex',
          }}
          maxH="2000px"
          maxW="90%"
          flexWrap="wrap"
          flexDir="column"
          overflowY="auto"
          gap="0.2rem"
          p="2rem"
        >
          {flavors?.map((f) => {
            return (
              <ListItem key={f.id} fontSize="1.1rem">
                {f.name}
              </ListItem>
            );
          })}
        </UnorderedList>
      </Flex>
    </QuoteFormLayout>
  );
}

export default Flavor;
