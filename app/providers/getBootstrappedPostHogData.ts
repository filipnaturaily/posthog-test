import { PostHog } from 'posthog-node';
import { cookies } from 'next/headers';
import { nanoid } from 'nanoid';
import { cache } from 'react';

export const getBootstrappedPostHogData = async () => {
  const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const postHogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

  if (!postHogKey || !postHogHost || !isProd) return undefined;

  let distinctID = '';
  const phCookieName = `ph_${postHogKey}_posthog`;
  const cookieStore = cookies();
  const phCookie = cookieStore.get(phCookieName);

  if (phCookie) {
    const phCookieParsed = JSON.parse(phCookie.value);
    distinctID = phCookieParsed.distinct_id;
  }

  const generateId = cache(() => {
    return nanoid();
  });

  if (!distinctID) {
    distinctID = generateId();
  }

  const postHogClient = new PostHog(postHogKey, {
    host: postHogHost,
    flushAt: 1,
    flushInterval: 0,
  });

  const featureFlags = await postHogClient.getAllFlags(distinctID);

  const bootstrapData = {
    distinctID,
    featureFlags,
  };

  return bootstrapData;
};
