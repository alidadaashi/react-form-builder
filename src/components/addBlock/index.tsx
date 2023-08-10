import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';

const AddBlock: React.FC = () => {
  const { guestMode } = useContext(AppContext);
  return (
    <div>
      {!guestMode && (
        <div>
          <button className="fixed right-8 bottom-8 rounded-full bg-green-700 hover:bg-green-800 w-12 h-12 text-white font-medium text-4xl flex justify-center items-center">
            <span className="-mt-1">+</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default AddBlock;
