import { getBootstrappedPostHogData } from '../providers/getBootstrappedPostHogData';

export const FirstExperimentServerSide = async () => {
  const bootstrapData = await getBootstrappedPostHogData();

  if (!bootstrapData) return <p>PostHog does not work properly</p>;

  const flag = bootstrapData.featureFlags['fresh-experiment'];

  if (flag === 'control')
    return (
      <div className='bg-teal-400'>
        <h1 className='font-bold text-4xl'>This is control variant</h1>
        <p>Shout out to this group, below is useless button</p>
        <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
          I do nothing
        </button>
      </div>
    );

  if (flag === 'test')
    return (
      <div className='bg-purple-400'>
        <h1 className='font-bold text-4xl'>This is another variant</h1>
        <p>Shout out to this group, below is useless button</p>
        <button className='w-fit bg-white text-black border border-black rounded-lg px-4 py-2'>
          I do nothing
        </button>
      </div>
    );
};
