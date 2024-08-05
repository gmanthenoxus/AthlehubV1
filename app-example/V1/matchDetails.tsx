// File: app/screens/MatchDetailScreen.tsx

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MatchDetailScreen = () => {
  const route = useRoute();
  const { matchData } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{`${matchData.teamA} vs ${matchData.teamB}`}</Text>
      <Text style={{ fontSize: 18 }}>{`Final Score: ${matchData.scoreA} - ${matchData.scoreB}`}</Text>
      <Text style={{ fontSize: 16 }}>{`Date: ${new Date(matchData.timestamp).toLocaleString()}`}</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Team {matchData.teamA} Players:</Text>
        {matchData.playersA.map((player: any, index: number) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{player.name}</Text>
            <Text>{`Score: ${player.score}`}</Text>
            <Text>{`Assist: ${player.assist}`}</Text>
            <Text>{`Miss: ${player.miss}`}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Team {matchData.teamB} Players:</Text>
        {matchData.playersB.map((player: any, index: number) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{player.name}</Text>
            <Text>{`Score: ${player.score}`}</Text>
            <Text>{`Assist: ${player.assist}`}</Text>
            <Text>{`Miss: ${player.miss}`}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MatchDetailScreen;
