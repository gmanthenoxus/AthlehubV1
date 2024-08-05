// src/features/liveGame/LiveGameScreen.tsx
import React from 'react'
import { View, Text } from 'react-native'
import RealTimeScoreboard from './RealTimeScoreboard'
import GameClock from './GameClock'
import PlayerStatsTracking from './PlayerStatsTracking'
import EventLogging from './EventLogging'
import TeamStats from './TeamStats'

const LiveGameScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Live Game</Text>
      <RealTimeScoreboard />
      <GameClock />
      <PlayerStatsTracking />
      <EventLogging />
      <TeamStats />
    </View>
  )
}

export default LiveGameScreen
