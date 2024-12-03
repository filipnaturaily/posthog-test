'use client';

import posthog from 'posthog-js';
import { PostHogFeature } from 'posthog-js/react';
import { useEffect, useState } from 'react';
// import { LoadingSkeleton } from './LoadingSkeleton';

export const FirstExperiment = () => {
  // const variant = useFeatureFlagVariantKey('first-experiment');

  // if (variant === 'control') {
  //   return (
  //     <div className='bg-teal-400'>
  //       <h1 className='font-bold text-4xl'>This is control variant</h1>
  //       <p>Shout out to this group, below is useless button</p>
  //       <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
  //         I do nothing
  //       </button>
  //     </div>
  //   );
  // }

  // if (variant === 'another') {
  //   return (
  //     <div className='bg-purple-400'>
  //       <h1 className='font-bold text-4xl'>This is another variant</h1>
  //       <p>Shout out to this group, below is useless button</p>
  //       <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
  //         I do nothing
  //       </button>
  //     </div>
  //   );
  // }

  // if (variant === undefined) return <LoadingSkeleton />;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posthog) {
      posthog.onFeatureFlags(() => {
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading)
    return (
      <div className='bg-red-400 py-20'>
        <p>This is default component</p>
      </div>
    );

  return (
    <>
      <PostHogFeature flag={'first-experiment'} match={'control'}>
        <div className='bg-teal-400'>
          <h1 className='font-bold text-4xl'>This is control variant</h1>
          <p>Shout out to this group, below is useless button</p>
          <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
            I do nothing
          </button>
        </div>
      </PostHogFeature>
      <PostHogFeature flag={'first-experiment'} match={'another'}>
        <div className='bg-purple-400'>
          <h1 className='font-bold text-4xl'>This is another variant</h1>
          <p>Shout out to this group, below is useless button</p>
          <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
            I do nothing
          </button>
        </div>
      </PostHogFeature>
    </>
  );
};
