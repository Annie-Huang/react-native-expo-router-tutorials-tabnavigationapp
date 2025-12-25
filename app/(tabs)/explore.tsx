import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
