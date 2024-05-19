import { FC } from 'react';
import Layout from './Layout';
import { Loader2 } from 'lucide-react';

const Loading: FC<{ layout?: boolean }> = ({ layout = false }) => {
  return (
    <>
      {layout ? (
        <Layout>
          <div className="bg-inherit h-[calc(100vh-64px-56px)] md:h-[calc(100vh-64px-40px)] flex flex-col items-center justify-center p-4">
            <Loader2 className=" h-7 w-7 animate-spin text-white" />
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="w-3/4  sm:aspect-[9/10] md:aspect-auto bg-base-200 flex flex-col items-center justify-center p-4 rounded-2xl gap-3">
            <Loader2 className=" h-7 w-7 animate-spin text-white" />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Loading;
