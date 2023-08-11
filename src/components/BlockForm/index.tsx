import AppContext from '@/shared/context/appContext';
import { Block } from '@/shared/types/app';
import { useContext, useState } from 'react';
import TextBlockForm from './TextBlockForm';
const BlockForm = ({
  type,
  closeModal,
}: {
  type: string;
  closeModal: () => void;
}) => {
  const { setBlocks, blocks } = useContext(AppContext);
  const [blockData, setBlockData] = useState({} as Block);
  const [showError, setShowError] = useState(false);
  const handleChange = (currentBlock: Block) => {
    setBlockData(currentBlock);
  };
  const handleClick = () => {
    if (!blockData.order || blockData.content === '') {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      setBlocks([...blocks, blockData]);
      closeModal();
    }
  };
  return (
    <div>
      {type === 'text' && (
        <TextBlockForm
          blockData={handleChange}
          blocksCount={blocks.length}
        />
      )}
      {type === 'image' && <input type="file" />}
      <button
        className="bg-green-600 px-6 py-2 text-white rounded-full "
        onClick={handleClick}
      >
        {' '}
        Register
      </button>
      {showError && (
        <p className="italic text-red-700 ">
          {' '}
          Please fill all fields correctly{' '}
        </p>
      )}
    </div>
  );
};

export default BlockForm;
