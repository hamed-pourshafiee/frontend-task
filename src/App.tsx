import React from 'react';
// import './styles/index.scss';
import './styles/output.css';
import Search from 'components/organisms/search';
import SearchProvider from 'store';
import AutoCompleteProvider from 'store/auto-complete';
import DarkMode from 'components/atoms/dark-mode';
import ButtonComponent from './components/atoms/button';

const App = (): JSX.Element => (
  <section className="App m--t-10 p--10">
    <DarkMode />
    <ButtonComponent />
    <div className="m--t-10" />
    <SearchProvider>
      <AutoCompleteProvider>
        <Search />
      </AutoCompleteProvider>
    </SearchProvider>
  </section>
);
export default App;
