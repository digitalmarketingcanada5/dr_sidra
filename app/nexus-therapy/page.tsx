'use client';

import React from 'react';
import { NexusTherapyHero } from '@/components/sections/nexus-therapy/NexusTherapyHero';
import { WhoIsThisFor } from '@/components/sections/nexus-therapy/WhoIsThisFor';
import { HowItWorks } from '@/components/sections/nexus-therapy/HowItWorks';
import { FlexibleTherapy } from '@/components/sections/nexus-therapy/FlexibleTherapy';
import { WhatWeTreat } from '@/components/sections/nexus-therapy/WhatWeTreat';
import { VRExposures } from '@/components/sections/nexus-therapy/VRExposures';
import { VRRelaxation } from '@/components/sections/nexus-therapy/VRRelaxation';

export default function NexusTherapyPage() {
  return (
    <main className="bg-[#fbfbfd]">
      <NexusTherapyHero />
      <WhoIsThisFor />
      <HowItWorks />
      <FlexibleTherapy />
      <WhatWeTreat />
      <VRExposures />
      <VRRelaxation />
    </main>
  );
}
