import React from 'react';
import NavigationView from './Navigation.view';

import * as T from './Navigation.type';

const NavigationContainer = ({ direction, items }: T.NavigationProps) => {
  return <NavigationView direction={direction} items={items} />;
};

export default NavigationContainer;
