import React from 'react';

const colors = {
  blue: "#00FFFF",
  yellow: "#FFFF00",
};

const ColorContext = React.createContext(colors);

export {ColorContext};