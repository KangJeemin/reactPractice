import React from 'react';
import ColorBox from './contexts/ColorBox'
import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color'
import SelectColors from './contexts/SelectColor';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;