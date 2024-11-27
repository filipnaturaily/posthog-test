import { PostHog } from 'posthog-node';

export const PostHogServerSideClient = () => {
  const posthogClient =
    process.env.NEXT_PUBLIC_ENV === 'production' &&
    process.env.NEXT_PUBLIC_POSTHOG_KEY &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST &&
    new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });

  return { posthogClient };
};
