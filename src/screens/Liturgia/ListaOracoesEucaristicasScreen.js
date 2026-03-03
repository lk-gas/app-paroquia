import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
// Atualizado: Importando da biblioteca que evita o alerta
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Ionicons } from '@expo/vector-icons';

export default function ListaOracoesEucaristicasScreen({ navigation }) {
  
  const oracoes = [
    { id: '1', titulo: 'Oração Eucarística I', subtitulo: 'Cânon Romano', rota: 'Eucaristica01' },
    { id: '2', titulo: 'Oração Eucarística II', subtitulo: 'A mais comum no dia a dia', rota: 'Eucaristica02' },
    { id: '3', titulo: 'Oração Eucarística III', subtitulo: 'Para domingos e festas', rota: 'Eucaristica03' },
    { id: '4', titulo: 'Oração Eucarística IV', subtitulo: 'Rica teologia bíblica', rota: 'Eucaristica04' },
    { id: '5', titulo: 'Oração Eucarística V', subtitulo: 'Congresso Eucarístico', rota: 'Eucaristica05' },
  ];

  return (
    // 'edges' garante que o marrom preencha até o topo do iPhone/Android
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitulo}>Orações Eucarísticas</Text>
        <Text style={styles.instrucao}>Selecione a oração desejada:</Text>

        {oracoes.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.card} 
            onPress={() => navigation.navigate(item.rota)}
            activeOpacity={0.7}
          >
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.subtitulo}>{item.subtitulo}</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#8D6E63" />
          </TouchableOpacity>
        ))}

        <View style={styles.footerNote}>
          <Ionicons name="information-circle-outline" size={16} color="#EFEBE9" />
          <Text style={styles.textoFooter}>Textos conforme o Missal Romano</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#8D6E63' // Padronizado para marrom
  },
  scrollContent: { 
    padding: 20,
    paddingTop: 10
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5
  },
  instrucao: { 
    fontSize: 16, 
    color: '#EFEBE9', 
    marginBottom: 25, 
    textAlign: 'center',
    opacity: 0.9
  },
  card: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 22,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  info: { flex: 1 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#3E2723' },
  subtitulo: { fontSize: 14, color: '#8D6E63', marginTop: 4 },
  footerNote: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20,
    marginBottom: 20 
  },
  textoFooter: { color: '#EFEBE9', fontSize: 12, marginLeft: 5, opacity: 0.8 }
});