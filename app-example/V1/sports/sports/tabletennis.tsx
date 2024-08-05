import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TableTennisSettings = ({ matchSetting, setMatchSetting, matchType, setMatchType }) => {
  const [pickerFocused, setPickerFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Select Match Setting:</Text>
      <Picker selectedValue={matchSetting} onValueChange={(itemValue) => setMatchSetting(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Singles" value="singles" />
        <Picker.Item label="Doubles" value="doubles" />
        {/* Add more table tennis-specific settings if needed */}
      </Picker>

      <Text>Select Match Type:</Text>
      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Field -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Friendly" value="friendly" />
        <Picker.Item label="Tournament" value="tournament" />
        <Picker.Item label="League" value="league" />
        {/* Add more table tennis-specific match types if needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export const tabltennisStats = {
  stat1: "Stat1",
  stat2: "Stat2",
  // Add more sport-specific stats here
};

export const tabltennisStatsComponent = ({ player, updateStat }) => (
  <View>
    <Button title="Stat1" onPress={() => updateStat(player, 'stat1')} />
    <Button title="Stat2" onPress={() => updateStat(player, 'stat2')} />
    // Add more buttons for other stats
  </View>
);

export default TableTennisSettings;
