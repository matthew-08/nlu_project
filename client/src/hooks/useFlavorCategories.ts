import { useEffect, useState } from 'react';
import appFetch from '../utils/appFetch';

const useFlavorCategories = () => {
  const [categories, setCategories] = useState();

  const handleFetchCategories = async () => {
    const cat = await appFetch({
      method: 'GET',
      path: '/api/categories',
    }).then((r) => r.json());
    console.log(cat);
  };
  useEffect(() => {
    handleFetchCategories();
  }, []);
};
