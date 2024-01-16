import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

const WelcomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`¡Bienvenido, ${username}!`}</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} style={styles.logoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: '#84A2C5',
    fontSize: 30,
    marginBottom: 20,
  },
  logoutButton: {
    width: 359,
    height: 59,
    borderRadius: 15,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default WelcomeScreen;
