import * as React from 'react';
import { ISearch } from 'models/contex.model';

export type AutoCompleteContextType = {
  autoComplete: ISearch[];
  saveAutoComplete: (_list: ISearch[]) => void;
  clearAutoComplete: () => void;
}

export const AutoCompleteContext = React.createContext<AutoCompleteContextType | null>(null);

const AutoCompleteProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [autoComplete, setAutoComplete] = React.useState<ISearch[]>([]);

  // show received search items in auto complete compoenent
  const saveAutoComplete = (_list: ISearch[]): void => {
    setAutoComplete([..._list]);
  };

  // clear received search items in auto complete compoenent
  const clearAutoComplete = (): void => {
    setAutoComplete([]);
  };

  return (
    <AutoCompleteContext.Provider value={{ autoComplete, saveAutoComplete, clearAutoComplete }}>
      {children}
    </AutoCompleteContext.Provider>
  );
};

export default AutoCompleteProvider;
