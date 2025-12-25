import React from 'react';

import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

const TabsLayout = () => {
  // return <Tabs />;

  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ tabBarLabel: 'Home' }} />
      <Tabs.Screen name='explore' options={{ tabBarLabel: 'Explore' }} />
      <Tabs.Screen name='profile' options={{ tabBarLabel: 'My Profile' }} />
    </Tabs>
  );
};

export default TabsLayout;
