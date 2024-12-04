// import { LandingPageVariantsServer } from './components/LandingPageVariantsServer';
// import { LandingPageVariantsClient } from './components/LandingPageVariantsClient';
// import { VercelTestClientSide } from './components/VercelTestClientSide';
// import { MultipleVariantsFlag } from './components/MultipleVariantsFlag';
// import { FirstExperiment } from './components/FirstExperiment';
// import { YetAnotherExperiment } from './components/YetAnotherExperiment';

import { FirstExperimentServerSide } from './components/FirstExperimentServerSide';

const Page = () => {
  return (
    <div>
      {/* <LandingPageVariantsServer /> */}
      {/* <LandingPageVariantsClient /> */}
      {/* <VercelTestClientSide /> */}
      {/* <MultipleVariantsFlag /> */}
      {/* <FirstExperiment /> */}
      {/* <YetAnotherExperiment /> */}
      <FirstExperimentServerSide />
    </div>
  );
};

export default Page;
