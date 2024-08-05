import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FootballSettings = ({ matchSetting, setMatchSetting, matchType, setMatchType }) => {
  const [pickerFocused, setPickerFocused] = useState(false);
  
  return (
    <View style={styles.container}>
      <Text>Select Match Setting:</Text>
      <Picker selectedValue={matchSetting} onValueChange={(itemValue) => setMatchSetting(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="5v5" value="5v5" />
        <Picker.Item label="7v7" value="7v7" />
        <Picker.Item label="11v11" value="11v11" />
        {/* Add more football-specific settings if needed */}
      </Picker>

      <Text>Select Match Type:</Text>
      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Friendly" value="friendly" />
        <Picker.Item label="League" value="league" />
        <Picker.Item label="Knockout" value="knockout" />
        {/* Add more football-specific match types if needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
export const footballStats = {
  goal: "Goal",
  assist: "Assist",
  foul: "Foul",
  // Add more football-specific stats here
};

export const FootballStatsComponent = ({ player, updateStat }) => (
  <View>
    <Button title="Goal" onPress={() => updateStat(player, 'goal', 1)} />
    <Button title="Assist" onPress={() => updateStat(player, 'assist', 1)} />
    <Button title="Foul" onPress={() => updateStat(player, 'foul', 1)} />
  </View>
);

export const updateFootballStat = (stats, player, stat, value) => {
  if (!stats[player]) {
    stats[player] = { goal: 0, assist: 0, foul: 0 };
  }
  stats[player][stat] += value;
  return stats;
};

export default FootballSettings;
