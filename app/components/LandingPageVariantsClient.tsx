'use client';

import { useFeatureFlagEnabled, useFeatureFlagPayload } from 'posthog-js/react';

export const LandingPageVariantsClient = () => {
  const flagEnabled = useFeatureFlagEnabled('landing-page-variants');

  console.log('client side flag enabled', flagEnabled);

  const payload = useFeatureFlagPayload('landing-page-variants');

  if (flagEnabled)
    return (
      <div className='p-4 bg-green-400'>
        <p>Testing new landing page option - client side</p>
        {payload ? <pre>{JSON.stringify(payload)}</pre> : <p>No payload</p>}
      </div>
    );

  if (!flagEnabled) {
    return (
      <div className='p-4 bg-blue-400'>
        <p>Testing default one - client side</p>
        {payload ? <pre>{JSON.stringify(payload)}</pre> : <p>No payload</p>}
      </div>
    );
  }

  if (flagEnabled === undefined) return null;
};
