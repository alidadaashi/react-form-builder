import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';

const Preview: React.FC = () => {
  const { blocks, guestMode } = useContext(AppContext);
  return (
    <div className=" w-3/4 mx-auto">
      <h1 className="font-bold text-2xl mb-4">
        {guestMode ? 'Preview' : 'Edit'}
      </h1>
      <div className="bg-white p-4 rounded-md">
        {blocks.map((block) => (
          <div key={block.id}>{block.content}</div>
        ))}
      </div>
    </div>
  );
};
export default Preview;
