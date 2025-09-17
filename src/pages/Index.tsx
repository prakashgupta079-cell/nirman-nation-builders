import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Challenge from '@/components/Challenge';
import VisionMission from '@/components/VisionMission';
import CoreBranches from '@/components/CoreBranches';
import WhatWeDo from '@/components/WhatWeDo';
import GlobalNexus from '@/components/GlobalNexus';
import WhatMakesUsDifferent from '@/components/WhatMakesUsDifferent';
import Contact from '@/components/Contact';
import MovingParticles from '@/components/MovingParticles';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Moving particles background */}
      <MovingParticles />
      
      {/* Main content */}
      <div className="relative z-20">
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
    </div>
  );
};

export default Index;
