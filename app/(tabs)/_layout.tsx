import React from 'react';

import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  // return <Tabs />;

  return (
    <Tabs
      screenOptions={{
        // tabBarLabelPosition: 'beside-icon', // generally for tablets
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' color={color} size={24} />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' color={color} size={24} />
          ),
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' color={color} size={24} />
          ),
          tabBarBadge: 3,
          title: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
