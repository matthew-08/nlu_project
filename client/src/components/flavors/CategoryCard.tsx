import React from 'react';

type Props = {
  name: string;
};

function CategoryCard({ name }: Props) {
  return <div>{name}</div>;
}

export default CategoryCard;
