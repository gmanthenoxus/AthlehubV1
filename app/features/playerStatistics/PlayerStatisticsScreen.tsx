// src/features/playerStatistics/PlayerStatisticsScreen.tsx
import React from 'react'
import { View, Text } from 'react-native'
import CumulativeStatsOverview from './CumulativeStatsOverview'
import DetailedGameStatsView from './DetailedGameStatsView'

const PlayerStatisticsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Player Statistics</Text>
      <CumulativeStatsOverview />
      <DetailedGameStatsView />
    </View>
  )
}

export default PlayerStatisticsScreen
