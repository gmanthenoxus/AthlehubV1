// src/features/liveGame/TeamStats.tsx
import React from 'react'
import { View, Text } from 'react-native'

const TeamStats = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Team Stats</Text>
      {/* Example stats */}
      <Text>Team A - Total Points: 0, Total Rebounds: 0, Total Assists: 0</Text>
      <Text>Team B - Total Points: 0, Total Rebounds: 0, Total Assists: 0</Text>
    </View>
  )
}

export default TeamStats
