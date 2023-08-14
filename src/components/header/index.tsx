import AppContext from '@/shared/context/appContext';
import clsx from 'clsx';
import { useContext } from 'react';

const Header: React.FC = () => {
  const { guestMode, setMode, blocks, handleBlocks } =
    useContext(AppContext);
  const deleteblock = (id: number) => () => {
    const newBlocks = blocks.filter((block) => block.id !== id);
    handleBlocks(newBlocks);
  };
  return (
    <header
      className={clsx(
        'flex justify-between items-center py-8 border-b-2 border-b-gray-400 mb-8 w-full sticky top-0  z-10',
        guestMode ? 'bg-gray-300' : 'bg-gray-200'
      )}
    >
      <div className="block-container w-10/12">
        <div className="flex gap-3 ">
          {blocks.length > 0 &&
            blocks.map((block) => (
              <div
                className="bg-white rounded-md p-2 min-w-auto group w-72 truncate relative"
                key={block.id}
              >
                {block.content}
                {!guestMode && (
                  <button
                    onClick={deleteblock(block.id)}
                    className="bg-red-600 hover:bg-red-700 text-white w-6 h-6 flex items-center justify-center rounded-full absolute top-0 bottom-0 my-auto right-2 hidden group-hover:block"
                  >
                    <span className="-mt-1 block">x</span>
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="w-2/12 text-right">
        <button
          className={clsx(
            guestMode
              ? ' bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-600 hover:bg-gray-700',
            ' rounded-full px-4 py-2 text-white columns-1'
          )}
          onClick={() => setMode(!guestMode)}
        >
          {`${guestMode ? 'Guest' : 'Editor'} Mode`}
        </button>
      </div>
    </header>
  );
};
export default Header;
