import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
