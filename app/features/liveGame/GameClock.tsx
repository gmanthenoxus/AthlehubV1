// src/features/liveGame/GameClock.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const GameClock = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, seconds])

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Game Clock</Text>
      <Text>{new Date(seconds * 1000).toISOString().substr(11, 8)}</Text>
      <Button title={isRunning ? 'Pause' : 'Start'} onPress={() => setIsRunning(!isRunning)} />
      <Button title="Reset" onPress={() => setSeconds(0)} />
    </View>
  )
}

export default GameClock
