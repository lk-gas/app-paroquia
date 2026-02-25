import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
// Mudança aqui: importando do pacote correto
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Ionicons } from '@expo/vector-icons';

export default function MenuLiturgiaScreen({ navigation }) {
  return (
    // O SafeAreaView agora gerencia as margens de forma inteligente
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitulo}>Liturgia e Ritos</Text>
        <Text style={styles.headerSub}>Participe da celebração com todo o material litúrgico</Text>
        
        <View style={styles.divisor} />

        {/* BOTÃO LITURGIA DIÁRIA */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('LiturgiaDiaria')} 
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: '#EFEBE9' }]}>
            <Ionicons name="calendar" size={26} color="#8D6E63" />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.cardTitulo}>Liturgia Diária</Text>
            <Text style={styles.cardSub}>Leituras, Salmos e Evangelho</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#8D6E63" />
        </TouchableOpacity>

        {/* BOTÃO ORAÇÕES EUCARÍSTICAS */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('ListaOracoesEucaristicas')} 
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: '#FBE9E7' }]}>
            <Ionicons name="flame" size={26} color="#D32F2F" />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.cardTitulo}>Orações Eucarísticas</Text>
            <Text style={styles.cardSub}>Cânon Romano e Orações I a V</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#8D6E63" />
        </TouchableOpacity>

        {/* BOTÃO RITO DA MISSA */}
        <TouchableOpacity 
          style={[styles.card, { opacity: 0.6 }]} 
          onPress={() => { /* Futura implementação */ }}
          activeOpacity={1}
        >
          <View style={[styles.iconBox, { backgroundColor: '#F5F5F5' }]}>
            <Ionicons name="book-outline" size={26} color="#9E9E9E" />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.cardTitulo}>Rito da Missa</Text>
            <Text style={styles.cardSub}>Em breve: Partes fixas da Missa</Text>
          </View>
          <Ionicons name="lock-closed-outline" size={18} color="#9E9E9E" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1 },
  content: { padding: 25, paddingTop: 10 },
  headerTitulo: { fontSize: 32, fontWeight: 'bold', color: '#5D4037', textAlign: 'left' },
  headerSub: { fontSize: 16, color: '#8D6E63', marginTop: 5, marginBottom: 10 },
  divisor: { height: 4, width: 45, backgroundColor: '#8D6E63', borderRadius: 2, marginBottom: 35 },
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 22, 
    alignItems: 'center', 
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0'
  },
  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoContainer: { flex: 1, marginLeft: 15 },
  cardTitulo: { fontSize: 18, fontWeight: '700', color: '#3E2723' },
  cardSub: { fontSize: 13, color: '#8D6E63', marginTop: 3 }
});