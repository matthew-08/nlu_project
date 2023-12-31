import { useDisclosure } from '@chakra-ui/react';
import { RefObject } from 'react';

import { useEventListener } from 'usehooks-ts';

export function useDropdownHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMouseEnter = () => onOpen();
  const handleMouseLeave = () => onClose();

  useEventListener('mouseenter', handleMouseEnter, elementRef);
  useEventListener('mouseleave', handleMouseLeave, elementRef);

  return {
    isOpen,
  };
}

export default useDropdownHover;
