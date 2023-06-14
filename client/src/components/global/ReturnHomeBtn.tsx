import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function ReturnHomeBtn() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/')}
      w="200px"
      padding="2rem"
      fontSize="1.2rem"
      colorScheme="blue"
    >
      Return to homepage
    </Button>
  );
}

export default ReturnHomeBtn;
