// File: app/screens/MatchHistoryScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const MatchHistoryScreen = () => {
  const navigation = useNavigation();
  const [matchHistory, setMatchHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchMatchHistory = async () => {
      try {
        const history = await AsyncStorage.getItem('matchHistory');
        if (history) {
          setMatchHistory(JSON.parse(history));
        }
      } catch (error) {
        console.error('Failed to load match history', error);
      }
    };

    fetchMatchHistory();
  }, []);

  const viewMatchDetails = (matchData: any) => {
    navigation.navigate('matchDetails', { matchData });
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {matchHistory.length === 0 ? (
        <Text>No matches logged yet.</Text>
      ) : (
        matchHistory.map((match, index) => (
          <TouchableOpacity key={index} onPress={() => viewMatchDetails(match)}>
            <View style={{ marginBottom: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>{`${match.teamA} vs ${match.teamB}`}</Text>
              <Text>{`Score: ${match.scoreA} - ${match.scoreB}`}</Text>
              <Text>{`Date: ${new Date(match.timestamp).toLocaleString()}`}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default MatchHistoryScreen;
