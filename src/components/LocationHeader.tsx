import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface LocationHeaderProps {
  location: string;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({location}) => {
  return (
    <View style={styles.locationHeader}>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationHeader: {
    backgroundColor: '#444',
    padding: 20, // Increased padding for more space
    alignItems: 'center',
    marginHorizontal: 10, // Add horizontal margin for breathing room
    borderRadius: 8, // Rounded corners for a polished look
  },
  locationText: {
    color: '#fff',
    fontSize: 24, // Slightly larger text
    fontFamily: 'Roboto',
  },
});

export default LocationHeader;
