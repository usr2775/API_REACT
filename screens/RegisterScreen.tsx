// RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { registerUser } from '../services/ApiService'; // Asegúrate de tener el servicio api configurado

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    try {
      // TODO: Agrega la lógica real para registrar al usuario aquí
      const response = await registerUser(name, email, password);
      console.log(response.data);

      // Después de un registro exitoso, redirige a la pantalla de bienvenida
      navigation.navigate('Welcome', { username: name });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Error al registrar. Verifica tus datos.');
    }
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <Button
        title="Regístrate"
        onPress={handleRegister} // Corregí esta línea para llamar a la función handleRegister
      />
      <Button title="Ya tienes una cuenta? Inicia sesión" onPress={() => navigation.navigate('Login')} />
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
    </View>
  );
};

export default RegisterScreen;
