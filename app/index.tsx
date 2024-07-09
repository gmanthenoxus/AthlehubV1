// app/index.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import CommonStyles from '../components/commonStyles';

const IndexScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Load the name from storage when the component mounts
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) setName(storedName);
    };
    loadName();
  }, []);

  const saveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      alert('Name saved!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.title}>Welcome to Athlehub</Text>
      <TextInput
        style={CommonStyles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={CommonStyles.button} onPress={saveName}>
        <Text style={CommonStyles.buttonText}>SAVE NAME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate('matchLog')}>
        <Text style={CommonStyles.buttonText}>LOG A MATCH</Text>
      </TouchableOpacity>
      <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate('matchHistory')}>
        <Text style={CommonStyles.buttonText}>VIEW MATCH HISTORY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate('PlayerStatistics')}>
        <Text style={CommonStyles.buttonText}>VIEW PLAYER STATISTICS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;

