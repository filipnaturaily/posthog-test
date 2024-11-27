'use client';

import { useFeatureFlagEnabled } from 'posthog-js/react';
import React from 'react';

export const VercelTestClientSide = () => {
  const flagEnabled = useFeatureFlagEnabled('vercel-test-flag');

  if (flagEnabled) {
    return <p className='p-4 bg-fuchsia-400'>Vercel flag - ver A</p>;
  }

  if (!flagEnabled) {
    return <p className='p-4 bg-fuchsia-400'>Vercel flag - ver B</p>;
  }
};
