import { useRef } from 'react';

// handle focus in input component
const useFocus = () => {
  const htmlElRef = useRef<HTMLInputElement>(null);

  const setFocus = (): void => {
    // eslint-disable-next-line no-unused-expressions
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus] as const;
};
export default useFocus;
