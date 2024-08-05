// src/features/home/QuickLinks.tsx
import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const QuickLinks = () => {
  const navigation = useNavigation()

  return (
    <View style={{ margin: 20 }}>
      <Button title="Match Logging" onPress={() => navigation.navigate('Match Logging')} />
      <Button title="Live Game" onPress={() => navigation.navigate('Live Game')} />
      <Button title="Match History" onPress={() => navigation.navigate('Match History')} />
      <Button title="Player Statistics" onPress={() => navigation.navigate('Player Statistics')} />
    </View>
  )
}

export default QuickLinks
