'use client';

import { useFeatureFlagVariantKey } from 'posthog-js/react';

export const FirstExperiment = () => {
  const variant = useFeatureFlagVariantKey('first-experiment');

  if (variant === 'control') {
    <div className='bg-teal-400'>
      <h1 className='font-bold text-4xl'>This is control variant</h1>
      <p>Shout out to this group, below is useless button</p>
      <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
        I do nothing
      </button>
    </div>;
  }

  if (variant === 'another') {
    <div className='bg-purple-400-400'>
      <h1 className='font-bold text-4xl'>This is another variant</h1>
      <p>Shout out to this group, below is useless button</p>
      <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
        I do nothing
      </button>
    </div>;
  }

  if (variant === undefined) return null;

  return <div>FirstExperiment</div>;
};
