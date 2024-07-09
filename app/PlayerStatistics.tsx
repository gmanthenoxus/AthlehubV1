// app/matchHistory.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerStatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Player Stats Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerStatsScreen;
