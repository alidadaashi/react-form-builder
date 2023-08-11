import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';
const BlockForm = ({ type, closeModal }) => {
  const { setBlocks } = useContext(AppContext);
  const handleClick = () => {
    closeModal();
    setBlocks((prev) => [
      ...prev,
      {
        id: '2',
        type: 'text',
        order: 2,
        content: 'This is another block',
      },
    ]);
  };
  return (
    <div>
      form {type}
      <button className="bg-green-600" onClick={handleClick}>
        {' '}
        register
      </button>
    </div>
  );
};

export default BlockForm;
