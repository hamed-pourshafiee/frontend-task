import FadeInOut from 'components/organisms/fade-in-out';
import { ISearch } from 'models/contex.model';
import React from 'react';

type SearchResultProps = {
  searchItems: ISearch[];
  onClearAll: () => void | undefined;
  onRemove: (id: string) => void | undefined;
}

const SearchResult = ({ searchItems = [], onClearAll, onRemove }: SearchResultProps): JSX.Element => {
  /**
   * click remove button click handler
   * remove an item from search result
   * @param id
   * @returns
   */
  const remove = (id: string): void => {
    if (!onRemove) return;
    onRemove(id);
  };

  return (
    <FadeInOut isFade={searchItems && searchItems.length > 0}>
      <div className="flex flex--between m--y-10">
        <h2>Search history</h2>
        <span role="none" onClick={onClearAll} className="cursor--pointer font--12 text--underline">Clear search history</span>
      </div>
      <hr className="line--simple" />
      <ul role="listitem" className="result">
        {
          searchItems && searchItems.map((item) => (
            <React.Fragment key={item.id}>
              <li className="flex">
                <h3 className="w--60%">{item.name}</h3>
                <div className="flex flex--align-items flex--justify-end text--right w--40%">
                  <span className="font--12 text--gray font--bold">{item.date}</span>
                  {/* eslint-disable-next-line max-len */}
                  <button type="button" className="cursor--pointer m--l-10 text--gray font--bold bg--transparent border--0" onClick={() => remove(item.id ?? '')}>&times;</button>
                </div>
              </li>
              <hr className="line--simple" />
            </React.Fragment>
          ))
        }
      </ul>
    </FadeInOut>
  );
};

export default SearchResult;
