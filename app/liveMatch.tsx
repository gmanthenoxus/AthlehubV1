// screens/LiveGameScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import CommonStyles from '../components/commonStyles'; // Import common styles
import { useRoute,useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PlayerStats = {
    name: string;
    score: number;
    assist: number;
    miss: number;
  };
  
  type MatchData = {
    teamA: string;
    teamB: string;
    playersA: PlayerStats[];
    playersB: PlayerStats[];
  };

const LiveGameScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { teamA, teamB, playersA: initialPlayersA, playersB: initialPlayersB }: MatchData = route.params;
    const [playersA, setPlayersA] = useState<PlayerStats[]>(initialPlayersA);
    const [playersB, setPlayersB] = useState<PlayerStats[]>(initialPlayersB);
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [selectedPlayer, setSelectedPlayer] = useState<{ team: 'A' | 'B'; name: string } | null>(null);

    // Update player's individual stats
    const updatePlayerStats = (team: 'A' | 'B', playerName: string, stat: 'score' | 'assist' | 'miss') => {
        const updateStats = (players: PlayerStats[]) => {
          return players.map(player => {
            if (player.name === playerName) {
              return {
                ...player,
                [stat]: player[stat] + 1,
              };
            }
            return player;
          });
        };
    
        if (team === 'A') {
          setPlayersA(updateStats(playersA));
          if (stat === 'score') setScoreA(scoreA + 1);
        } else {
          setPlayersB(updateStats(playersB));
          if (stat === 'score') setScoreB(scoreB + 1);
        }
    };

    // endMatch function
    const endMatch = async () => {
        const matchData = {
        teamA,
        teamB,
        playersA,
        playersB,
        scoreA,
        scoreB,
        timestamp: new Date().toISOString(),
        };
    
        try {
        const history = await AsyncStorage.getItem('matchHistory');
        const matchHistory = history ? JSON.parse(history) : [];
        matchHistory.push(matchData);
        await AsyncStorage.setItem('matchHistory', JSON.stringify(matchHistory));
        } catch (error) {
        console.error('Failed to save match data', error);
        }
    
        // Navigate to match history screen
        navigation.navigate('matchHistory');
    };
  
  
  

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{`${teamA} vs ${teamB}`}</Text>
          <Text>{`Score: ${scoreA} - ${scoreB}`}</Text>
    
          <Text style={{ marginTop: 20, fontSize: 18 }}>Select a Player:</Text>
          {playersA.map((player, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedPlayer({ team: 'A', name: player.name })}>
              <Text style={{ color: selectedPlayer?.name === player.name && selectedPlayer?.team === 'A' ? 'blue' : 'black' }}>
                {player.name}
              </Text>
            </TouchableOpacity>
          ))}
    
          {playersB.map((player, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedPlayer({ team: 'B', name: player.name })}>
              <Text style={{ color: selectedPlayer?.name === player.name && selectedPlayer?.team === 'B' ? 'blue' : 'black' }}>
                {player.name}
              </Text>
            </TouchableOpacity>
          ))}
    
          {selectedPlayer && (
            <View style={{ marginTop: 20 }}>
              <Text>{`Update stats for ${selectedPlayer.name}`}</Text>
              <Button
                onPress={() => updatePlayerStats(selectedPlayer.team, selectedPlayer.name, 'score')}
                title="Score"
              />
              <Button
                onPress={() => updatePlayerStats(selectedPlayer.team, selectedPlayer.name, 'assist')}
                title="Assist"
              />
              <Button
                onPress={() => updatePlayerStats(selectedPlayer.team, selectedPlayer.name, 'miss')}
                title="Miss"
              />
            </View>
          )}
    
          <Button onPress={endMatch} title="End Match" />
        </ScrollView>
      );
    };

/* const styles = StyleSheet.create({
    // Existing styles...
    container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 16,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: 8,
    },
    teamContainer: {
      marginVertical: 8,
    },
    teamName: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },
    playerButton: {
      padding: 10,
      marginVertical: 4,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      alignItems: 'center',
    },
    selectedPlayer: {
      backgroundColor: '#0056b3',
    },
    playerName: {
      color: '#fff',
      fontSize: 16,
    },
    statButtonsContainer: {
      marginVertical: 16,
      alignItems: 'center',
    },
    selectedPlayerText: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    statButton: {
      padding: 10,
      marginVertical: 4,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      alignItems: 'center',
    },
    statButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    playerStatsContainer: {
      marginTop: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
    },
    playerStatsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    playerStatsText: {
      fontSize: 16,
      marginVertical: 2,
    },
    timerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    timerText: {
      fontSize: 18,
      marginRight: 10,
    },
    timerButton: {
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      alignItems: 'center',
    },
    timerButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  }); */
  
//};
export default LiveGameScreen;