import { Flex, useMediaQuery } from '@chakra-ui/react';
import useNavItems from '../../../../hooks/useNavItems';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function NavListController() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 900px)');
  const { listItems } = useNavItems();
  return (
    <Flex gap={['2rem', '4rem', '6rem']}>
      {isSmallerThan800 ? (
        <MobileNav listItems={listItems} />
      ) : (
        <DesktopNav listItems={listItems} />
      )}
    </Flex>
  );
}

export default NavListController;
