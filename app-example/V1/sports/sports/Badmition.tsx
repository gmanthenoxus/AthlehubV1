import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BadmintonSettings = ({ matchSetting, setMatchSetting, matchType, setMatchType }) => {
  const [pickerFocused, setPickerFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Select Match Setting:</Text>
      <Picker selectedValue={matchSetting} onValueChange={(itemValue) => setMatchSetting(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Singles" value="singles" />
        <Picker.Item label="Doubles" value="doubles" />
        <Picker.Item label="Mixed Doubles" value="mixedDoubles" />
        {/* Add more badminton-specific settings if needed */}
      </Picker>

      <Text>Select Match Type:</Text>
      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Friendly" value="friendly" />
        <Picker.Item label="Tournament" value="tournament" />
        <Picker.Item label="League" value="league" />
        {/* Add more badminton-specific match types if needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export const badmitionStats = {
  goal: "Goal",
  assist: "Assist",
  foul: "Foul",
  // Add more football-specific stats here
};

export const badmitionStatsComponent = ({ player, updateStat }) => (
  <View>
    <Button title="Goal" onPress={() => updateStat(player, 'goal')} />
    <Button title="Assist" onPress={() => updateStat(player, 'assist')} />
    <Button title="Foul" onPress={() => updateStat(player, 'foul')} />
  </View>
);

export default BadmintonSettings;

