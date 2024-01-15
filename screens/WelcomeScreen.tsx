import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>{`¡Bienvenido, ${username}!`}</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};


export default WelcomeScreen;

