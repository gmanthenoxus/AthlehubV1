// src/features/liveGame/PlayerStatsTracking.tsx
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const PlayerStatsTracking = () => {
  const [playerStats, setPlayerStats] = React.useState([{ name: '', points: 0, assists: 0, rebounds: 0 }])

  const handleStatChange = (index: number, stat: string, value: number) => {
    const newStats = [...playerStats]
    newStats[index] = { ...newStats[index], [stat]: value }
    setPlayerStats(newStats)
  }

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Player Stats Tracking</Text>
      {playerStats.map((player, index) => (
        <View key={index}>
          <Text>{player.name}</Text>
          <Text>Points: {player.points}</Text>
          <Button title="Add Point" onPress={() => handleStatChange(index, 'points', player.points + 1)} />
          <Button title="Subtract Point" onPress={() => handleStatChange(index, 'points', Math.max(0, player.points - 1))} />
          <Text>Assists: {player.assists}</Text>
          <Button title="Add Assist" onPress={() => handleStatChange(index, 'assists', player.assists + 1)} />
          <Button title="Subtract Assist" onPress={() => handleStatChange(index, 'assists', Math.max(0, player.assists - 1))} />
          <Text>Rebounds: {player.rebounds}</Text>
          <Button title="Add Rebound" onPress={() => handleStatChange(index, 'rebounds', player.rebounds + 1)} />
          <Button title="Subtract Rebound" onPress={() => handleStatChange(index, 'rebounds', Math.max(0, player.rebounds - 1))} />
        </View>
      ))}
      <Button
        title="Add Player"
        onPress={() => setPlayerStats([...playerStats, { name: '', points: 0, assists: 0, rebounds: 0 }])}
      />
    </View>
  )
}

export default PlayerStatsTracking
