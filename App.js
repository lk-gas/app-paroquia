import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { database } from './src/firebaseConfig.js';
import { ref, set } from 'firebase/database';


import HomeScreen from './src/screens/Institucional/HomeScreen';
import HistoriaScreen from './src/screens/Institucional/HistoriaScreen';
import SecretariaScreen from './src/screens/Secretaria/SecretariaScreen';
import HorariosScreen from './src/screens/Secretaria/HorariosScreen';
import InscricoesScreen from './src/screens/Secretaria/InscricoesScreen';
import CadastroFormScreen from './src/screens/Secretaria/CadastroFormScreen';
import OracoesScreen from './src/screens/Oracoes/OracoesScreen';
import DetalheOracaoScreen from './src/screens/Oracoes/DetalheOracaoScreen';
import ListaOracoesEucaristicasScreen from './src/screens/Liturgia/ListaOracoesEucaristicasScreen.js';
import LiturgiaScreen from './src/screens/Liturgia/LiturgiaScreen.js';
import MenuLiturgiaScreen from './src/screens/Liturgia/MenuLiturgiaScreen';
import Eucaristica01 from './src/screens/Liturgia/Eucaristica01.js';
import Eucaristica02 from './src/screens/Liturgia/Eucaristica02.js';
import Eucaristica03 from './src/screens/Liturgia/Eucaristica03.js';
import Eucaristica04 from './src/screens/Liturgia/Eucaristica04.js';
import Eucaristica05 from './src/screens/Liturgia/Eucaristica05.js';
import TercoMisericordia from './src/screens/Terco/TercoMisericordia.js';
import MenuTerco from './src/screens/Terco/MenuTerco.js'; 
import TercoGozoso from './src/screens/Terco/TercoGozoso'; 
import IntencoesScreen from './src/screens/Intencoes/IntencoesScreen'; 
import LoginAdminScreen from './src/screens/Secretaria/LoginAdminScreen';
import AvisosSemanaisScreen from './src/screens/Secretaria/AvisosSemanaisScreen';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#8D6E63' },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Historia" component={HistoriaScreen} options={{ title: 'Nossa História' }} />
      <Stack.Screen name="Oracoes" component={OracoesScreen} options={{ title: 'Orações' }} />      
      <Stack.Screen name="DetalheOracao" component={DetalheOracaoScreen} options={{ title: 'Prece' }} />
      <Stack.Screen name="MenuLiturgia" component={MenuLiturgiaScreen} options={{ title: 'Liturgia' }} />
      <Stack.Screen name="LiturgiaDiaria" component={LiturgiaScreen} options={{ title: 'Liturgia Diária' }} />
      <Stack.Screen name="ListaOracoesEucaristicas" component={ListaOracoesEucaristicasScreen} options={{ title: 'Orações Eucarísticas' }} />
      <Stack.Screen name="Eucaristica01" component={Eucaristica01} />
      <Stack.Screen name="Eucaristica02" component={Eucaristica02} />
      <Stack.Screen name="Eucaristica03" component={Eucaristica03} />
      <Stack.Screen name="Eucaristica04" component={Eucaristica04} />
      <Stack.Screen name="Eucaristica05" component={Eucaristica05} />
      <Stack.Screen name="Horarios" component={HorariosScreen} />
      <Stack.Screen name="Secretaria" component={SecretariaScreen} />
      <Stack.Screen name="Inscricoes" component={InscricoesScreen} />
      <Stack.Screen name="CadastroForm" component={CadastroFormScreen} />
      <Stack.Screen name="TercoGozoso" component={TercoGozoso} options={{ headerShown: false }} />
      <Stack.Screen name="MenuTerco" component={MenuTerco} options={{ title: 'Santos Terços' }} />
      <Stack.Screen name="TercoMisericordia" component={TercoMisericordia} options={{ headerShown: false }} />
      <Stack.Screen name="Intencoes" component={IntencoesScreen} options={{ title: 'Intenções da Missa' }} />
      <Stack.Screen name="AvisosSemanais" component={AvisosSemanaisScreen} options={{ title: 'Avisos da Semana' }} />
      <Stack.Screen name="LoginAdmin" component={LoginAdminScreen} options={{ title: 'Acesso Restrito' }} />
    </Stack.Navigator>
  );
}

export default function App() {

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    if (!Device.isDevice) {
      console.log('Notificações exigem um dispositivo físico.');
      return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Permissão de notificação negada!');
      return;
    }

    try {
      const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      const tokenData = await Notifications.getExpoPushTokenAsync({ projectId });
      const token = tokenData.data;

      const tokenLimpo = token.replace(/[:[\]]/g, "_"); 
      set(ref(database, `tokens_notificacao/${tokenLimpo}`), {
        pushToken: token,
        plataforma: Platform.OS,
        dataRegistro: new Date().toISOString(),
      });

      console.log("Token registrado com sucesso!");
    } catch (error) {
      console.log("Erro ao registrar token:", error);
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#8D6E63',
      });
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: '#8D6E63',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#FFF', height: 60, paddingBottom: 8 }
      }}>
        <Tab.Screen 
            name="Início" 
            component={HomeStack} 
            options={{ tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} /> }} 
        />
        
        <Tab.Screen 
            name="Intenções" 
            component={IntencoesScreen} 
            options={{ 
              tabBarIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size} /> 
            }} 
        />

        <Tab.Screen 
            name="História" 
            component={HistoriaScreen} 
            options={{ tabBarIcon: ({color, size}) => <Ionicons name="book" color={color} size={size} /> }} 
        />
        <Tab.Screen 
            name="Secretaria" 
            component={SecretariaScreen} 
            options={{ tabBarIcon: ({color, size}) => <Ionicons name="call" color={color} size={size} /> }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}