import React from 'react';

import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

const TabsLayout = () => {
  // return <Tabs />;

  return (
    <Tabs>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='explore' />
      <Tabs.Screen name='profile' />
    </Tabs>
  );
};

export default TabsLayout;
