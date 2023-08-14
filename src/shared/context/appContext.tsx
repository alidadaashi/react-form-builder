import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { AppState, Block } from '../types/app';
const AppContext = createContext<AppState>({
  guestMode: true,
  setMode: () => {},
  blocks: [],
  handleBlocks: () => {},
});

const initialBlocks: Block[] = [
  {
    id: 1,
    type: 'text',
    order: 1,
    content: 'Please fill out the form below',
  },
  {
    id: 151874,
    type: 'input',
    order: 2,
    content: 'Email Address:',
  },
];
export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<AppState['guestMode']>(true);
  const [blocks, setBlocks] =
    useState<AppState['blocks']>(initialBlocks);
  const handleBlocks = (blocks: Block[]) => {
    const orderedBlocks = correctOrderNumbers(blocks);
    setBlocks(orderedBlocks);
  };
  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  const correctOrderNumbers = useCallback((blocks: Block[]) => {
    const orderedBlocks = blocks.map((block, index) => {
      return {
        ...block,
        order: index + 1,
      };
    });
    return orderedBlocks;
  }, []);

  return (
    <AppContext.Provider
      value={{
        guestMode: mode,
        setMode,
        blocks: blocks,
        handleBlocks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
