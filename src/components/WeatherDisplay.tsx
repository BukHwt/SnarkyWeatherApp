import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface WeatherDisplayProps {
  temperature: number;
  weatherIcon: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  weatherIcon,
}) => {
  return (
    <View style={styles.weatherDisplay}>
      <Text style={styles.temperature}>{temperature}°</Text>
      <Image source={{uri: weatherIcon}} style={styles.weatherIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30, // Increased padding
    backgroundColor: '#444',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  temperature: {
    fontSize: 64, // Larger temperature for emphasis
    color: '#ff9900',
    fontFamily: 'Roboto',
  },
  weatherIcon: {
    width: 60, // Slightly larger icon
    height: 60,
    marginLeft: 15,
  },
});

export default WeatherDisplay;
