import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import Home from './containers/Home';
import {theme} from './components';

const App = () => {
  return (
    <ThemeProvider {...{theme}}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
