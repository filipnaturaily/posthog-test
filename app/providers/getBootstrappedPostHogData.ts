import { PostHog } from 'posthog-node';
import { cookies } from 'next/headers';
import { nanoid } from 'nanoid';

export const getBootstrappedPostHogData = async () => {
  const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const postHogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

  if (!postHogKey || !postHogHost || !isProd) return undefined;

  let distinct_id = '';
  const phProjectAPIKey = 'phc_Igs8y7lWEqnmsAE8BQJDBHkpnKP2MiQhnTdBaobOzmM';
  const phCookieName = `ph_${phProjectAPIKey}_posthog`;
  const cookieStore = cookies();
  const phCookie = cookieStore.get(phCookieName);

  if (phCookie) {
    const phCookieParsed = JSON.parse(phCookie.value);
    distinct_id = phCookieParsed.distinct_id;
  }

  if (!distinct_id) {
    distinct_id = nanoid();
  }

  const postHogClient = new PostHog(postHogKey, {
    host: postHogHost,
    flushAt: 1,
    flushInterval: 0,
  });

  const flags = await postHogClient.getAllFlags(distinct_id);

  const bootstrapData = {
    distinctID: distinct_id,
    featureFlags: flags,
  };

  return bootstrapData;
};
