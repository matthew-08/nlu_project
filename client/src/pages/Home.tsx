import { Heading } from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import AppSlider from '../components/home/Slider/AppSlider';

export default function Home() {
  return (
    <DefaultLayout>
      <AppSlider />
    </DefaultLayout>
  );
}
