import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';
import Image from 'next/image';

const Preview: React.FC = () => {
  const { blocks, guestMode } = useContext(AppContext);
  return (
    <div className=" w-3/4 mx-auto">
      <h1 className="font-bold text-2xl mb-4">
        {guestMode ? 'Preview' : 'Edit'}
      </h1>
      <div className="bg-white p-6 rounded-md flex flex-col gap-8 block-list">
        {blocks.map((block) => {
          switch (block.type) {
            case 'text':
              return (
                <div
                  className="font-medium text-xl p-2 rounded-md transition-all duration-100"
                  key={block.id}
                  data-order={block.order}
                >
                  {block.content}
                </div>
              );
            case 'input':
              return (
                <div
                  key={block.id}
                  data-order={block.order}
                  className="p-2 rounded-md transition-all duration-100"
                >
                  <label htmlFor="input" className="-mb-2 block">
                    {block.content}
                  </label>
                  <input
                    className="border-solid border-gray-400 border-2 rounded-md mt-4 p-2 mb-8"
                    type="text"
                    name="input"
                  />
                </div>
              );
            case 'image':
              return (
                <div
                  key={block.id}
                  data-order={block.order}
                  className="p-2 rounded-md transition-all duration-100"
                >
                  <Image
                    className="w-full rounded-lg"
                    alt=""
                    src={block.content}
                    width={0}
                    height={0}
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
export default Preview;
