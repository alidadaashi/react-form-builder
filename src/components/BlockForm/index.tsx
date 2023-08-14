import AppContext from '@/shared/context/appContext';
import { Block } from '@/shared/types/app';
import { useCallback, useContext, useState } from 'react';
import TextBlockForm from './TextBlockForm';
import InputBlockForm from './InputBlockForm';
import ImageBlockForm from './ImageBlockForm';
const BlockForm = ({
  type,
  closeModal,
}: {
  type: string | boolean;
  closeModal: () => void;
}) => {
  const { handleBlocks, blocks } = useContext(AppContext);
  const [blockData, setBlockData] = useState({} as Block);
  const [showError, setShowError] = useState(false);
  const handleChange = useCallback((block: Block) => {
    setBlockData(block);
  }, []);
  const handleClick = () => {
    if (!blockData.order || blockData.content === '') {
      setShowError(true);
      return;
    }
    // make sure it is a url
    else if (
      type === 'image' &&
      !blockData.content.match(/(http(s?):)([/|.|\w|\s|-])*/g)
    ) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      blocks.splice(blockData.order - 1, 0, blockData);
      handleBlocks([...blocks]);
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
      {type === 'image' && (
        <ImageBlockForm
          blockData={handleChange}
          blocksCount={blocks.length}
        />
      )}
      {type === 'input-text' && (
        <InputBlockForm
          blockData={handleChange}
          blocksCount={blocks.length}
        />
      )}
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
