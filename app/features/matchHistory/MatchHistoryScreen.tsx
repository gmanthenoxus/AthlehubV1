// src/features/matchHistory/MatchHistoryScreen.tsx
import React from 'react'
import { View, Text } from 'react-native'
import MatchList from './MatchList'

const MatchHistoryScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Match History</Text>
      <MatchList />
    </View>
  )
}

export default MatchHistoryScreen
