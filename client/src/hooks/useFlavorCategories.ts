import { useEffect, useState } from 'react';
import appFetch from '../utils/appFetch';

type FlavorCategories = {
  id: number;
  name: string;
};

const useFlavorCategories = () => {
  const [categories, setCategories] = useState<FlavorCategories[]>();

  const handleFetchCategories = async () => {
    const cat = await appFetch({
      method: 'GET',
      path: '/api/categories',
    }).then((r) => r.json());
    setCategories(cat);
  };
  useEffect(() => {
    handleFetchCategories();
  }, []);

  return { categories };
};

export default useFlavorCategories;
