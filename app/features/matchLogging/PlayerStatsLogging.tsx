// src/features/matchLogging/PlayerStatsLogging.tsx
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const PlayerStatsLogging = () => {
  const [playerName, setPlayerName] = React.useState('')
  const [points, setPoints] = React.useState('')
  const [assists, setAssists] = React.useState('')
  const [rebounds, setRebounds] = React.useState('')

  const handleAddPlayerStats = () => {
    // Add player stats logic
  }

  return (
    <View>
      <Text>Player Name:</Text>
      <TextInput
        value={playerName}
        onChangeText={setPlayerName}
        placeholder="Player Name"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Points:</Text>
      <TextInput
        value={points}
        onChangeText={setPoints}
        placeholder="Points"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Assists:</Text>
      <TextInput
        value={assists}
        onChangeText={setAssists}
        placeholder="Assists"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Rebounds:</Text>
      <TextInput
        value={rebounds}
        onChangeText={setRebounds}
        placeholder="Rebounds"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Add Player Stats" onPress={handleAddPlayerStats} />
    </View>
  )
}

export default PlayerStatsLogging
