import React from 'react';

type FadeInOutProps = {
  isFade: boolean;
  children: React.ReactNode;
}
// a global component to fade in and fade out any element
const FadeInOut = ({ isFade = false, children }: FadeInOutProps): JSX.Element => (
  <div className={`${isFade === true ? 'fade--in' : 'fade--out'}`}>
    {children}
  </div>
);
export default FadeInOut;
