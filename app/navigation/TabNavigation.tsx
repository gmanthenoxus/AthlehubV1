// src/navigation/TabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../features/home/HomeScreen';
import MatchLoggingScreen from '../features/matchLogging/MatchLoggingScreen';
import LiveGameScreen from '../features/liveGame/LiveGameScreen';
import MatchHistoryScreen from '../features/matchHistory/MatchHistoryScreen';
import PlayerStatisticsScreen from '../features/playerStatistics/PlayerStatisticsScreen';


const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Match Logging') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'Live Gam') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'Match History') {
              iconName = focused ? 'time' : 'time-outline';
            }
            else if (route.name === 'Player Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Match Logging" component={MatchLoggingScreen} />
        <Tab.Screen name="Live Game" component={LiveGameScreen} />
        <Tab.Screen name="Match History" component={MatchHistoryScreen} />
        <Tab.Screen name="Player Statistics" component={PlayerStatisticsScreen} />
        </Tab.Navigator>
    );
    
}

export default TabNavigation