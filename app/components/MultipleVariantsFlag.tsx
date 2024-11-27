'use client';

import {
  useFeatureFlagPayload,
  useFeatureFlagVariantKey,
} from 'posthog-js/react';
import { useEffect, useState } from 'react';

export const MultipleVariantsFlag = () => {
  const [flagVariantText, setFlagVariantText] = useState('');

  const variant = useFeatureFlagVariantKey('multiple-variants-flag');
  const payload = useFeatureFlagPayload('multiple-variants-flag');

  useEffect(() => {
    switch (variant) {
      case 'test-variant-1':
        setFlagVariantText('Variant 1 is active');
        break;
      case 'test-variant-2':
        setFlagVariantText('Variant 2 is active');
        break;
      case 'test-variant-3':
        setFlagVariantText('Variant 3 is active');
        break;
      case 'test-variant-4':
        setFlagVariantText('Variant 4 is active');
        break;
      default:
        setFlagVariantText('Something went wrong :(');
        break;
    }
  }, [variant]);

  return (
    <div className='space-y-2'>
      <p>{variant}</p>
      <pre>{JSON.stringify(payload)}</pre>
      {flagVariantText}
    </div>
  );
};
