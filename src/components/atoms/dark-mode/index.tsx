import React, { useState } from 'react';
// import './index.scss';

const DarkMode = (): JSX.Element => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  /**
   * toggle theme mode
   * @param toggle
   */
  const toggle = (isChecked: boolean): void => {
    // clear body class
    document.body.setAttribute('class', '');

    let themeMode: 'dark' | 'light' = 'light';
    if (isChecked === true) {
      themeMode = 'dark';
    }
    document.body.classList.add(themeMode);
    setTheme(themeMode);
  };

  return (
    <div className="dark-mode cursor--pointer">
      <input type="checkbox" name="" id="toggle-dark-mode" onChange={(event) => toggle(event.target.checked)} />
      <label htmlFor="toggle-dark-mode">{theme}</label>
    </div>
  );
};

export default DarkMode;
