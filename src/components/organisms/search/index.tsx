import Input from 'components/atoms/input';
import AutoComplete from 'components/molecules/auto-complete';
import SearchResult from 'components/molecules/search-result';
import formatDate from 'helpers/date.helper';
import { ISearch } from 'models/contex.model';
import React, { useState } from 'react';
import { SearchContextType, SearchContext } from 'store';
import { AutoCompleteContext, AutoCompleteContextType } from 'store/auto-complete';
import TicketmasterApi from 'api/ticketmaster';

const Search = (): JSX.Element => {
  const {
    searchs, deleteItem, saveItem, clearAll,
  } = React.useContext(SearchContext) as SearchContextType;
  const { autoComplete, saveAutoComplete, clearAutoComplete } = React.useContext(AutoCompleteContext) as AutoCompleteContextType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  /**
   * when input change call this function
   * @param _text
   * @returns
   */
  const onChange = async (_text: string): Promise<void> => {
    if (_text === '') {
      saveAutoComplete([]);
      return;
    }
    setIsLoading(true);
    /* class api */
    const data = await TicketmasterApi(_text);
    setIsLoading(false);
    setText(_text);
    saveAutoComplete(data);
  };

  /**
   * when add new item in result collection
   * @param item
   */
  const add = (item: ISearch): void => {
    const newItem = { ...item, date: formatDate() };
    saveItem(newItem);
  };

  /**
   * remove close button
   * @param id
   */
  const remove = (id: string): void => {
    deleteItem(id);
  };
  /**
   * remove all result item
   * when user click close, clearall, overlay call this
   */
  const clearAllResult = (): void => {
    clearAutoComplete();
  };

  return (
    <div className="w--600">
      <Input role="searchbox" onChange={onChange} value={text} isLoading={isLoading} placeholder="Search here" />
      <AutoComplete onClick={add} data={autoComplete} text={text} onClose={clearAllResult} />
      <SearchResult onRemove={remove} onClearAll={clearAll} searchItems={searchs} />
    </div>
  );
};

export default Search;
