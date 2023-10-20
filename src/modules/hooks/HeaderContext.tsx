import { createContext } from 'react';

type HeaderContextType = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export const HeaderContext = createContext<HeaderContextType>({
  page: '',
  setPage: () => {}
});
