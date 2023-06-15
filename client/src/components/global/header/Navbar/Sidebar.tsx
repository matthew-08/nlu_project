import React from 'react';
import { ListItem } from '../../../../hooks/useNavItems';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  listItems: ListItem[];
};

function Sidebar({ isOpen, onClose, listItems }: Props) {
  return <div>Sidebar</div>;
}

export default Sidebar;
