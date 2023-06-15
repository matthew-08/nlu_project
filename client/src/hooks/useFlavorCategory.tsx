import { useEffect, useState } from 'react';
import appFetch from '../utils/appFetch';

type Flavors = {
  id: number;
  flavor_category: number;
  name: string;
};

const useFlavorCategory = ({ id }: { id: number }) => {
  const [flavors, setFlavors] = useState<Flavors[]>();

  const handleFetchFlavors = async (fId: number) => {
    await appFetch({
      method: 'GET',
      path: `/api/categories/${id}/flavors`,
    })
      .then((res) => res.json())
      .then((r) => setFlavors([...r]));
  };
  useEffect(() => {
    handleFetchFlavors(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { flavors, handleFetchFlavors };
};

export default useFlavorCategory;
