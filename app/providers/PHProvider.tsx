'use client';

import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from 'react';
import posthog from 'posthog-js';

interface PHProviderProps {
  children: ReactNode;
  bootstrapData?: {
    distinctID: string;
    featureFlags: Record<string, string | boolean>;
  };
}

export function PHProvider({ children, bootstrapData }: PHProviderProps) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

  if (isProduction) {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!posthogKey || !posthogHost) {
      console.error('PostHog key or host is not defined.');
      return children;
    }

    if (posthog.has_opted_in_capturing()) {
      console.log('the post hog is initialized properly');
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'always',
        bootstrap: bootstrapData,
      });
    }

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
  }

  return children;
}
