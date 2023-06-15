import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from '../components/global/footer/Footer';
import Header from '../components/global/header/Header';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Flex flexDir="column" minH="100%" background="whiteAlpha.700">
      <Flex px={['1rem', '3rem']} flexDir="column" py="1rem">
        <Header />
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default DefaultLayout;
