import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mudei o nome da função para bater com o App.js
export default function ListaOracoesEucaristicasScreen({ navigation }) {
  
  const oracoes = [
    { id: '1', titulo: 'Oração Eucarística I', subtitulo: 'Cânon Romano', rota: 'Eucaristica01' },
    { id: '2', titulo: 'Oração Eucarística II', subtitulo: 'A mais comum no dia a dia', rota: 'Eucaristica02' },
    { id: '3', titulo: 'Oração Eucarística III', subtitulo: 'Para domingos e festas', rota: 'Eucaristica03' },
    { id: '4', titulo: 'Oração Eucarística IV', subtitulo: 'Rica teologia bíblica', rota: 'Eucaristica04' },
    { id: '5', titulo: 'Oração Eucarística V', subtitulo: 'Congresso Eucarístico', rota: 'Eucaristica05' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.instrucao}>Selecione a oração desejada:</Text>

        {oracoes.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.card} 
            // Aqui as rotas batem com os nomes que colocamos no Stack.Screen do App.js
            onPress={() => navigation.navigate(item.rota)}
            activeOpacity={0.7}
          >
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.subtitulo}>{item.subtitulo}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8D6E63" />
          </TouchableOpacity>
        ))}

        <View style={styles.footerNote}>
          <Ionicons name="information-circle-outline" size={16} color="#999" />
          <Text style={styles.textoFooter}>Textos conforme o Missal Romano</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  scrollContent: { padding: 20 },
  instrucao: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  card: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#8D6E63'
  },
  info: { flex: 1 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#5D4037' },
  subtitulo: { fontSize: 14, color: '#8D6E63', marginTop: 4 },
  footerNote: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  textoFooter: { color: '#999', fontSize: 12, marginLeft: 5 }
});