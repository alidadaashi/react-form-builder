import AppContext from '@/shared/context/appContext';
import clsx from 'clsx';
import { useContext } from 'react';

const Header: React.FC = () => {
  const { guestMode, setMode, blocks } = useContext(AppContext);
  return (
    <header className="flex justify-between w-full items-center">
      <div className="block-container w-10/12">
        <div className="flex gap-3 ">
          {blocks.length > 0 &&
            blocks.map((block) => (
              <div
                className="bg-white rounded-md p-2 min-w-auto w-72 truncate"
                key={block.id}
              >
                {block.content}
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
