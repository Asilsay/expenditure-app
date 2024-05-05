import { FC } from 'react';
import Layout from './Layout';

const Loading: FC<{ layout?: boolean }> = ({ layout = false }) => {
  return (
    <>
      {layout ? (
        <Layout>
          <div className="bg-inherit h-[calc(100vh-64px-56px)] md:h-[calc(100vh-64px-40px)] flex flex-col items-center justify-center p-4">
            Loading ...
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="w-3/4  sm:aspect-[9/10] md:aspect-auto bg-base-200 flex flex-col items-center justify-center p-4 rounded-2xl gap-3">
            <div className="flex flex-col items-center">Loading ...</div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Loading;
