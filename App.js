import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Ionicons } from '@expo/vector-icons';

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
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#8D6E63' }}>
        <Tab.Screen 
            name="Início" 
            component={HomeStack} 
            options={{ tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} /> }} 
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