/* eslint-disable react-hooks/exhaustive-deps */
// import useFocus from 'hooks/useFocus';
import useFocus from 'hooks/useFocus';
import React, { AriaRole, useEffect, useState } from 'react';
import LoadingSvg from '../loading/loading';

// import './index.scss';

interface InputProps {
  onChange?: (text: string) => void;
  value?: string;
  isLoading?: boolean;
  placeholder?: string;
  role?: AriaRole;
}

const defaultProps: InputProps = {
  onChange: () => null,
  value: '',
  isLoading: false,
  placeholder: '',
  role: 'none',
};

/**
 * input Atom
 * @param props
 * @returns
 */
const Input = ({
  value, isLoading, placeholder, onChange, role,
}: InputProps): JSX.Element => {
  const [text, setText] = useState(value ?? '');
  const [inputRef, setInputFocus] = useFocus();

  /**
   * create timeout for call api
   */
  useEffect(() => {
    const timeOutId = setTimeout(() => change(text), 500);
    return () => clearTimeout(timeOutId);
  }, [text]);

  /**
   * when input change call this function
   * @param _text
   * @returns
   */
  const change = (_text: string): void => {
    if (!onChange) return;
    onChange(_text);
  };

  /**
   * clear text in input
   */
  const clear = (): void => {
    setText('');
    setInputFocus();
  };

  return (
    <div className="input__wrapper z--2" role="listbox">
      <input
        className="input w--full rounded--none outline--none border--gray"
        type="text"
        value={text}
        placeholder={placeholder}
        ref={inputRef}
        role={role}
        onChange={(event) => setText(event.target.value)}
      />
      {
        text.length > 0 && isLoading === false && (
          <span role="none" onClick={clear} className="input__close">&times;</span>
        )
      }
      {
        isLoading === true && (
          <div className="input__spin">
            <LoadingSvg className="" />
          </div>
        )
      }
    </div>
  );
};
Input.defaultProps = defaultProps;
export default Input;
