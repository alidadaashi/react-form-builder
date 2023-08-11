import { Block } from '@/shared/types/app';
import { use, useEffect, useState } from 'react';

interface TextBlockFormProps {
  blocksCount: number;
  blockData: (block: Block) => void;
}

const TextBlockForm: React.FC<TextBlockFormProps> = ({
  blockData,
  blocksCount,
}) => {
  const [blockState, setBlockState] = useState({} as Block);
  useEffect(() => {
    setBlockState({
      order: blocksCount + 1,
      id: blocksCount + 1,
      type: 'text',
      content: '',
    });
  }, []);
  useEffect(() => {
    blockData(blockState);
  }, [blockState]);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setBlockState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col my-4">
      <h6 className="text-2xl text-gray-700 font-semibold ">
        Please type your text below.
      </h6>
      <form className="flex flex-col">
        <textarea
          onChange={handleChange}
          name="content"
          className="border-solid border-gray-400 border-2 h-24 rounded-md mt-4 p-2 mb-8"
        ></textarea>
        <label htmlFor="order"> Order</label>
        <input
          type="number"
          name="order"
          className="border-solid border-gray-400 border-2 rounded-md mt-4 p-2"
          placeholder="please just type a number"
          onChange={handleChange}
          value={blockState.order}
          min={1}
          max={blocksCount + 1}
        />
      </form>
    </div>
  );
};

export default TextBlockForm;
