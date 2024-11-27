import { LandingPageVariantsServer } from './components/LandingPageVariantsServer';
import { LandingPageVariantsClient } from './components/LandingPageVariantsClient';
import { VercelTestClientSide } from './components/VercelTestClientSide';

const Page = () => {
  return (
    <div>
      <LandingPageVariantsServer />
      <LandingPageVariantsClient />
      <VercelTestClientSide />
    </div>
  );
};

export default Page;
