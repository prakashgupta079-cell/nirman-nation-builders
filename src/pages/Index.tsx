import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Challenge from '@/components/Challenge';
import VisionMission from '@/components/VisionMission';
import CoreBranches from '@/components/CoreBranches';
import WhatWeDo from '@/components/WhatWeDo';
import GlobalNexus from '@/components/GlobalNexus';
import WhatMakesUsDifferent from '@/components/WhatMakesUsDifferent';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenge />
      <VisionMission />
      <CoreBranches />
      <WhatWeDo />
      <GlobalNexus />
      <WhatMakesUsDifferent />
      <Contact />
    </div>
  );
};

export default Index;
