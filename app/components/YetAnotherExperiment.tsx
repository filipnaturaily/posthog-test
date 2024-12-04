// import { nanoid } from 'nanoid';
// import { PostHogServerSideClient } from '../providers/PostHogServerSideClient';

// export const YetAnotherExperiment = async () => {
//   const { posthogClient } = PostHogServerSideClient();

//   const flags = posthogClient && (await posthogClient.getAllFlags(nanoid()));

//   console.log(flags);

//   if (!flags) return null;

//   if (flags['yet-another-experiment'] === 'control') {
//     return <p>This is control variant</p>;
//   }

//   if (flags['yet-another-experiment'] === 'test') {
//     return <p>This is test variant</p>;
//   }
// };
