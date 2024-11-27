import { nanoid } from 'nanoid';
import { client } from '../const/serverSidePostHogClient';

// If proxy is not set, make sure to test in incognito mode
export const LandingPageVariantsServer = async () => {
  if (!client) return;

  const isMyFlagEnabledForUser = await client.isFeatureEnabled(
    'landing-page-variants',
    // The nanoid is only for local tests. How identify works. When a user starts browsing your website or app, PostHog automatically assigns them an anonymous ID, which is stored locally. This enables us to track anonymous users – even across different sessions

    // https://posthog.com/docs/product-analytics/identify#:~:text=events%20when%20needed.-,How%20identify%20works,users%20%E2%80%93%20even%20across%20different%20sessions.
    nanoid()
  );

  console.log(isMyFlagEnabledForUser);

  if (isMyFlagEnabledForUser) {
    return (
      <div className='p-4 bg-green-400'>
        <p>Testing new landing page option</p>
      </div>
    );
  }

  if (!isMyFlagEnabledForUser) {
    return (
      <div className='p-4 bg-blue-400'>
        <p>Testing default one</p>
      </div>
    );
  }
};
