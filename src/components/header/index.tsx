import AppContext from '@/shared/context/appContext';
import clsx from 'clsx';
import { useContext } from 'react';

const Header: React.FC = () => {
  const { guestMode, setMode } = useContext(AppContext);
  return (
    <header className="flex justify-between w-full items-center">
      <h1>Header</h1>
      <button
        className={clsx(
          guestMode
            ? ' bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-600 hover:bg-gray-700',
          ' rounded-full px-4 py-2 text-white'
        )}
        onClick={() => setMode(!guestMode)}
      >
        {`${guestMode ? 'Guest' : 'Editor'} Mode`}
      </button>
    </header>
  );
};
export default Header;
