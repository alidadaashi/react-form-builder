import { ReactNode, createContext, useState } from 'react';
import { AppState } from '../types/app';
const AppContext = createContext<AppState>({
  guestMode: true,
  setMode: () => {},
});

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<AppState['guestMode']>(true);
  return (
    <AppContext.Provider value={{ guestMode: mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
