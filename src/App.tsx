import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {fetchWeather} from './services/weather';
import LocationHeader from './components/LocationHeader';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDescription from './components/WeatherDescription';
import SnarkyComment from './components/SnarkyComment';
import WeatherData from './types/WeatherData';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
    };
    getWeather();
  }, []);

  if (!weather) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const location = weather.location.name;
  const temperature = weather.current.temperature;
  const weatherIcon = weather.current.weather_icons[0];
  const description = weather.current.weather_descriptions[0];
  const snarkyComment = "It's so dreary, even the clouds are bored.";

  return (
    <SafeAreaView style={styles.container}>
      <LocationHeader location={location} />
      <WeatherDisplay temperature={temperature} weatherIcon={weatherIcon} />
      <WeatherDescription description={description} />
      <SnarkyComment comment={snarkyComment} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    justifyContent: 'space-around', // Distribute components vertically
    paddingVertical: 20, // Add some padding at the top and bottom
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Roboto', // Apply fontFamily here
  },
});

export default App;
