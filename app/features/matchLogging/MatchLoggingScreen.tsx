// src/features/matchLogging/MatchLoggingScreen.tsx
import React from 'react'
import { View, Text } from 'react-native'
import MatchLoggingForm from './MatchLoggingForm'

const MatchLoggingScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Log a New Match</Text>
      <MatchLoggingForm />
    </View>
  )
}

export default MatchLoggingScreen
