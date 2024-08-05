// src/features/liveGame/EventLogging.tsx
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const EventLogging = () => {
  const [events, setEvents] = useState<string[]>([])
  const [currentEvent, setCurrentEvent] = useState('')

  const handleAddEvent = () => {
    setEvents([...events, currentEvent])
    setCurrentEvent('')
  }

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Event Logging</Text>
      <TextInput
        value={currentEvent}
        onChangeText={setCurrentEvent}
        placeholder="Log an event"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
      {events.map((event, index) => (
        <Text key={index}>{event}</Text>
      ))}
    </View>
  )
}

export default EventLogging
