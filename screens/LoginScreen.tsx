import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { loginUser } from '../services/apiService'; // Asegúrate de tener el servicio api configurado

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="No tienes una cuenta? Regístrate"
        onPress={() => navigation.navigate('Register')}/>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
