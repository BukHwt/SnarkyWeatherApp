import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface WeatherDescriptionProps {
  description: string;
}

const WeatherDescription: React.FC<WeatherDescriptionProps> = ({
  description,
}) => {
  return (
    <View style={styles.weatherDescription}>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDescription: {
    backgroundColor: '#555',
    padding: 20, // Increased padding
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 18, // Slightly larger text
    fontFamily: 'Roboto',
  },
});

export default WeatherDescription;
