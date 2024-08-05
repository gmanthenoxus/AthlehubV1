import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BasketballSettings = ({ matchSetting, setMatchSetting, matchType, setMatchType }) => {
  const [pickerFocused, setPickerFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Select Match Setting:</Text>
      <Picker selectedValue={matchSetting} onValueChange={(itemValue) => setMatchSetting(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="3v3" value="3v3" />
        <Picker.Item label="5v5" value="5v5" />
        {/* Add more basketball-specific settings if needed */}
      </Picker>

      <Text>Select Match Type:</Text>
      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Friendly" value="friendly" />
        <Picker.Item label="Tournament" value="tournament" />
        <Picker.Item label="Exhibition" value="exhibition" />
        {/* Add more basketball-specific match types if needed */}
      </Picker>
    </View>
  );
};

export const basketballStats = {
  score: "Score",
  miss: "Miss",
  assist: "Assist",
  rebound: "Rebound",
  // Add more basketball-specific stats here
};

export const BasketballStatsComponent = ({ player, updateStat }) => (
  <View>
    <Button title="Score" onPress={() => updateStat(player, 'score', 2)} />
    <Button title="Miss" onPress={() => updateStat(player, 'miss', 1)} />
    <Button title="Assist" onPress={() => updateStat(player, 'assist', 1)} />
    <Button title="Rebound" onPress={() => updateStat(player, 'rebound', 1)} />
  </View>
);

export const updateBasketballStat = (stats, player, stat, value) => {
  if (!stats[player]) {
    stats[player] = { score: 0, miss: 0, assist: 0, rebound: 0 };
  }
  stats[player][stat] += value;
  return stats;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default BasketballSettings;
