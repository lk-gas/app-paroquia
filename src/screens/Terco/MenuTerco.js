import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MenuTerco({ navigation }) {
  return (
    <View style={styles.flexContainer}>
      <LinearGradient colors={['#4E342E', '#3E2723']} style={styles.gradient}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.tituloHeader}>Santos Terços</Text>
            <View style={{ width: 28 }} />
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.instrucao}>Escolha a oração de hoje:</Text>

            <TouchableOpacity 
              style={styles.cardMenu} 
              onPress={() => navigation.navigate('TercoMisericordia')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="heart" size={32} color="#D32F2F" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.tituloCard}>Terço da Misericórdia</Text>
                <Text style={styles.subtituloCard}>"Jesus, eu confio em Vós"</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#A1887F" />
            </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cardMenu} 
            onPress={() => navigation.navigate('TercoGozoso')} 
          >
            <View style={styles.iconContainer}>
              <Ionicons name="rose" size={32} color="#F06292" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.tituloCard}>Terço Mariano</Text>
              <Text style={styles.subtituloCard}>Mistérios do dia</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A1887F" />
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  gradient: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  tituloHeader: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  scrollContent: { padding: 20 },
  instrucao: { color: '#D7CCC8', fontSize: 16, marginBottom: 25, textAlign: 'center' },
  cardMenu: { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 20, marginBottom: 15, elevation: 4 },
  iconContainer: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  textContainer: { flex: 1 },
  tituloCard: { fontSize: 18, fontWeight: 'bold', color: '#3E2723' },
  subtituloCard: { fontSize: 14, color: '#795548', marginTop: 2 },
});