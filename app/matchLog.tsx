// File: app/screens/MatchLogScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    if (teamA && teamB && playersA.length && playersB.length) {
      navigation.navigate('liveMatch', { teamA, teamB, playersA, playersB });
    } else {
      alert('Please fill in all fields and add players to both teams.');
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
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
