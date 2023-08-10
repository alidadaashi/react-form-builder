import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';

const Preview: React.FC = () => {
  const { blocks } = useContext(AppContext);
  return (
    <div className="bg-white w-3/4 mx-auto p-4 rounded-md">
      <h1 className="font-bold text-2xl">Preview</h1>
      {blocks.map((block) => (
        <div key={block.id}>{block.content}</div>
      ))}
    </div>
  );
};
export default Preview;
