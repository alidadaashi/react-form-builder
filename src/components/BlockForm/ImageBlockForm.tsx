import { Block } from '@/shared/types/app';
import { use, useEffect, useState } from 'react';

interface ImageBlockFormProps {
  blocksCount: number;
  blockData: (block: Block) => void;
}

const ImageBlockForm: React.FC<ImageBlockFormProps> = ({
  blockData,
  blocksCount,
}) => {
  const [blockState, setBlockState] = useState({} as Block);
  useEffect(() => {
    setBlockState({
      order: blocksCount + 1,
      id: Math.floor(Math.random() * 1000000),
      type: 'image',
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
      [name]: name === 'order' ? parseInt(value) : value,
    }));
  };
  return (
    <div className="flex flex-col my-4">
      <h6 className="text-2xl text-gray-700 font-semibold ">
        Please enter the URL of image.
      </h6>
      <form className="flex flex-col">
        <label htmlFor="label"> Image URL:</label>
        <input
          type="text"
          name="content"
          className="border-solid border-gray-400 border-2 rounded-md mt-4 p-2"
          placeholder="please just type a URL"
          onChange={handleChange}
        />

        <label htmlFor="order">Order</label>
        <input
          type="number"
          name="order"
          className="border-solid border-gray-400 border-2 rounded-md mt-4 p-2"
          placeholder="please just type a number"
          onChange={handleChange}
          defaultValue={blockState.order}
          min={1}
          max={blocksCount + 1}
        />
      </form>
    </div>
  );
};

export default ImageBlockForm;
