import React from 'react';
import { ISearch } from '../models/contex.model';
// import { ISearch } from '../models/contex.model';

export type SearchContextType = {
  searchs: ISearch[];
  saveItem: (item: ISearch) => void;
  clearAll: () => void;
  deleteItem: (id: string) => void;
}

export const SearchContext = React.createContext<SearchContextType | null>(null);

const SearchProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [searchs, setSearchs] = React.useState<ISearch[]>([]);

  // add a result item to search history
  const saveItem = (item: ISearch): void => {
    const newTodo: ISearch = {
      id: `${Math.random()}`,
      name: item.name,
      date: item.date,
    };
    setSearchs([...searchs, newTodo]);
  };

  // delete one result item from search history
  const deleteItem = (id: string): void => {
    const filter = searchs.filter((f) => f.id !== id);
    setSearchs([...filter]);
  };

  // remove all recent search history
  const clearAll = (): void => {
    setSearchs([]);
  };

  return (
    <SearchContext.Provider value={{
      searchs, saveItem, deleteItem, clearAll,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
