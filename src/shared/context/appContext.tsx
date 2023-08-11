import {
  ReactNode,
  createContext,
  use,
  useEffect,
  useState,
} from 'react';
import { AppState, Block } from '../types/app';
const AppContext = createContext<AppState>({
  guestMode: true,
  setMode: () => {},
  blocks: [],
  setBlocks: () => {},
});

const initialBlocks: Block[] = [
  {
    id: '1',
    type: 'text',
    order: 1,
    content: 'This is a text block',
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
  // Set blocks from localStorage
  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(initialBlocks));
    setBlocks(initialBlocks);
  }, []);

  // Sync blocks with localStorage
  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  return (
    <AppContext.Provider
      value={{ guestMode: mode, setMode, blocks: blocks, setBlocks }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
