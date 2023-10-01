import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Managements from '@/components/Managements';

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Managements />
    </div>
  );
};

export default page;