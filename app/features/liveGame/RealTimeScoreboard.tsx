// src/features/liveGame/RealTimeScoreboard.tsx
import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const RealTimeScoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(0)
  const [teamBScore, setTeamBScore] = useState(0)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
      <View>
        <Text>Team A</Text>
        <Text>{teamAScore}</Text>
        <Button title="Add Point" onPress={() => setTeamAScore(teamAScore + 1)} />
        <Button title="Subtract Point" onPress={() => setTeamAScore(Math.max(0, teamAScore - 1))} />
      </View>
      <View>
        <Text>Team B</Text>
        <Text>{teamBScore}</Text>
        <Button title="Add Point" onPress={() => setTeamBScore(teamBScore + 1)} />
        <Button title="Subtract Point" onPress={() => setTeamBScore(Math.max(0, teamBScore - 1))} />
      </View>
    </View>
  )
}

export default RealTimeScoreboard
