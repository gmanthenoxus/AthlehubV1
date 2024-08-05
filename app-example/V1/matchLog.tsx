// File: app/screens/MatchLogScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

// Import sport-specific settings
import BasketballSettings from './sports/sports/Basketball';
import FootballSettings from './sports/sports/football';
import BadmintonSettings from './sports/sports/Badmition';
import TableTennisSettings from './sports/sports/tabletennis';

type PlayerStats = {
  name: string;
  score: number;
  assist: number;
  miss: number;
};

const MatchLogScreen = () => {
  const navigation = useNavigation();

  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [playersA, setPlayersA] = useState<PlayerStats[]>([]);
  const [playersB, setPlayersB] = useState<PlayerStats[]>([]);
  const [playerNameA, setPlayerNameA] = useState('');
  const [playerNameB, setPlayerNameB] = useState('');
  const [sport, setSport] = useState('');
  const [matchSetting, setMatchSetting] = useState('');
  const [matchType, setMatchType] = useState('');
  const [pickerFocused, setPickerFocused] = useState(false);


  const renderMatchSettings = () => {
    switch (sport) {
      case 'basketball':
        return (
          <BasketballSettings
            matchSetting={matchSetting}
            setMatchSetting={setMatchSetting}
            matchType={matchType}
            setMatchType={setMatchType}
          />
        );
      case 'football':
        return (
          <FootballSettings
            matchSetting={matchSetting}
            setMatchSetting={setMatchSetting}
            matchType={matchType}
            setMatchType={setMatchType}
          />
        );
      case 'badminton':
        return (
          <BadmintonSettings
            matchSetting={matchSetting}
            setMatchSetting={setMatchSetting}
            matchType={matchType}
            setMatchType={setMatchType}
          />
        );
      case 'tableTennis':
        return (
          <TableTennisSettings
            matchSetting={matchSetting}
            setMatchSetting={setMatchSetting}
            matchType={matchType}
            setMatchType={setMatchType}
          />
        );
      default:
        return null;
    }
  };


  const addPlayerToTeamA = () => {
    if (playerNameA.trim()) {
      setPlayersA([...playersA, { name: playerNameA.trim(), score: 0, assist: 0, miss: 0 }]);
      setPlayerNameA('');
    }
  };

  const addPlayerToTeamB = () => {
    if (playerNameB.trim()) {
      setPlayersB([...playersB, { name: playerNameB.trim(), score: 0, assist: 0, miss: 0 }]);
      setPlayerNameB('');
    }
  };

  const startMatch = () => {
    if (teamA && teamB && playersA.length && playersB.length && sport && matchSetting && matchType) {
      navigation.navigate( sport, 'liveMatch', { teamA, teamB, playersA, playersB });
    } else {
      alert('Please fill in all fields and add players to both teams.');
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text>Select Sport:</Text>
      <Picker selectedValue={sport} onValueChange={(itemValue) => setSport(itemValue)} onFocus={() => setPickerFocused(true)} onBlur={() => setPickerFocused(false)}>
        <Picker.Item label="- Select a Sports -" value="" enabled={!pickerFocused}/>
        <Picker.Item label="Basketball" value="basketball" />
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Badminton" value="badminton" />
        <Picker.Item label="Table Tennis" value="tableTennis" />
      </Picker>

      {sport && renderMatchSettings()}

      <Text>Team A Name</Text>
      <TextInput value={teamA} onChangeText={setTeamA} placeholder="Enter Team A Name" />
      
      <Text>Add Players to Team A</Text>
      <TextInput value={playerNameA} onChangeText={setPlayerNameA} placeholder="Enter Player Name" />
      <Button onPress={addPlayerToTeamA} title="Add" />
      {playersA.map((player, index) => (
        <Text key={index}>{player.name}</Text>
      ))}

      <Text>Team B Name</Text>
      <TextInput value={teamB} onChangeText={setTeamB} placeholder="Enter Team B Name" />
      
      <Text>Add Players to Team B</Text>
      <TextInput value={playerNameB} onChangeText={setPlayerNameB} placeholder="Enter Player Name" />
      <Button onPress={addPlayerToTeamB} title="Add" />
      {playersB.map((player, index) => (
        <Text key={index}>{player.name}</Text>
      ))}

      <Button onPress={startMatch} title="Start Match" />
    </ScrollView>
  );
};

export default MatchLogScreen;
