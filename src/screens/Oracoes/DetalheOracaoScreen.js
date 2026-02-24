import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function DetalheOracaoScreen({ route }) {
  // Caso os parâmetros não cheguem por algum motivo, evitamos o erro
  const { titulo = "Oração", texto = "" } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* Detalhe estético no topo do card */}
          <View style={styles.detalheTopo} />
          
          <Text style={styles.titulo}>{titulo}</Text>
          
          <View style={styles.divisorContainer}>
            <View style={styles.linha} />
            <Text style={styles.simbolo}>✝</Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.textoOracao}>{texto}</Text>
          
          <View style={styles.footerCard}>
            <Text style={styles.amem}>Amém.</Text>
          </View>
        </View>

        <Text style={styles.instrucao}>Deslize para ler tudo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#8D6E63' // Mantendo a cor oficial da paróquia
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 30,
    minHeight: width * 0.8,
    // Sombra para Android
    elevation: 10,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  detalheTopo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: '#5D4037',
    opacity: 0.8,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
    marginTop: 10,
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  linha: {
    height: 1,
    backgroundColor: '#D7CCC8',
    width: 40,
  },
  simbolo: {
    marginHorizontal: 10,
    color: '#8D6E63',
    fontSize: 18,
  },
  textoOracao: {
    fontSize: 20, // Aumentado para melhor leitura
    color: '#3E2723',
    lineHeight: 32,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 5,
  },
  footerCard: {
    marginTop: 30,
    alignItems: 'center',
  },
  amem: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5D4037',
    fontFamily: 'serif', // Tenta usar uma fonte com serifa se disponível
  },
  instrucao: {
    color: '#EFEBE9',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    opacity: 0.6,
  }
});