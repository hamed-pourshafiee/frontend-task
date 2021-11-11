/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import FadeInOut from 'components/organisms/fade-in-out';
import { ISearch } from 'models/contex.model';
// import './index.scss';

type AutoCompleteProps = {
  text: string;
  data: ISearch[];
  onClick: (item: ISearch) => void | undefined;
  onClose: () => void | undefined;
}

const AutoComplete = ({
  text = '', data = [], onClick, onClose,
}: AutoCompleteProps): JSX.Element => {
  const [selectKeyIndex, setSelectKeyIndex] = useState<number>(0);
  /**
   * create key handler listener
   */
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });

  useEffect(() => {
    executeScroll();
  }, [selectKeyIndex]);

  /**
   * handle keys
   * @param param0
   * @returns
   */
  function downHandler({ key }: { key: string }): void {
    /**
     * handle arrow down key
     */
    if (key === 'ArrowUp') {
      if (selectKeyIndex === 0) return;
      setSelectKeyIndex(selectKeyIndex - 1);
      return;
    }
    /**
     * handle arrow down key
     */
    if (key === 'ArrowDown') {
      if ((selectKeyIndex + 1) === data?.length) return;
      setSelectKeyIndex(selectKeyIndex + 1);
      return;
    }
    /**
     * when user enter `Enter` key then add new item into result
     */
    if (key === 'Enter') {
      if (!data) return;
      const item = data[selectKeyIndex];
      add(item, selectKeyIndex);
      return;
    }
    if (key === 'Escape') {
      onClose();
    }
  }

  /**
   * add new item
   * @param item
   * @param index
   * @returns
   */
  const add = (item: ISearch, index: number): void => {
    if (!onClick) return;
    setSelectKeyIndex(index);
    onClick(item);
  };

  /**
   * handle highlight in autocomlete search item
   * @param _text
   * @param highlight
   * @returns
   */
  const getHighlightedText = (_text?: string, highlight?: string): JSX.Element => {
    if (!_text) return <></>;
    if (!highlight) return <></>;
    const parts = _text.split(new RegExp(`(${highlight})`, 'gi'));
    return <>{parts.map((part) => (part.toLowerCase() === highlight.toLowerCase() ? hilight(part) : part))}</>;
  };

  const hilight = (part: string): JSX.Element => <span className="font--bold text--base">{part}</span>;

  /**
   * define ref for scroll
   */
  const myRef = useRef<HTMLLIElement>(null);
  const executeScroll = (): void => {
    if (myRef?.current && myRef.current && myRef.current.scrollIntoView) {
      myRef.current.scrollIntoView();
    }
  };

  // eslint-disable-next-line max-len
  const resultItem = (item: ISearch, index: number): JSX.Element => (
    index === selectKeyIndex ? (
      <li ref={myRef} key={item.id} className="auto-complete__row auto-complete__row--selected"><button type="button" className="auto-complete__button cursor--pointer" onClick={() => add(item, index)}>{getHighlightedText(item.name, text)}</button></li>
    ) : (
      <li key={item.id} className="auto-complete__row"><button type="button" className="auto-complete__button cursor--pointer" onClick={() => add(item, index)}>{getHighlightedText(item.name, text)}</button></li>
    )
  );

  return (
    <FadeInOut isFade={data && data.length > 0}>
      <span role="none" className="auto-complete__overlay" onClick={onClose} />
      <ul role="listitem" className="auto-complete bg--white p--10 m--t-5 border--1 border--gray border--solid">
        {
          data && data.map((item, index) => resultItem(item, index))
        }
      </ul>
    </FadeInOut>
  );
};

export default AutoComplete;
