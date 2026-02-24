import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InscricoesScreen({ navigation }) {
  const opcoes = [
    { id: 1, titulo: 'Dizimista', icone: 'heart', cor: '#4CAF50', descrição: 'Ajude na manutenção da nossa comunidade.' },
    { id: 2, titulo: 'Sócio Operário', icone: 'construct', cor: '#FF9800', descrição: 'Colabore com as obras da nossa paróquia.' },
    { id: 3, titulo: 'Catequese', icone: 'people', cor: '#2196F3', descrição: 'Inscrições para a formação cristã infantil.' },
    { id: 4, titulo: 'Crisma', icone: 'flame', cor: '#F44336', descrição: 'Preparação para a confirmação do Batismo.' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        <View style={styles.header}>
          <Text style={styles.titulo}>Inscrições e Cadastros</Text>
          <View style={styles.divisor} />
          <Text style={styles.sub}>
            Escolha uma das opções abaixo para realizar sua inscrição ou cadastro na Paróquia.
          </Text>
        </View>

        {opcoes.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CadastroForm', { tipo: item.titulo })}
          >
            <View style={[styles.barraLateral, { backgroundColor: item.cor }]} />
            
            <View style={[styles.circuloIcone, { backgroundColor: item.cor + '15' }]}>
              <Ionicons name={item.icone} size={26} color={item.cor} />
            </View>

            <View style={styles.textoContainer}>
              <Text style={styles.textoBotao}>{item.titulo}</Text>
              <Text style={styles.textoDescricao}>{item.descrição}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#D7CCC8" />
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerTexto}>Sua participação constrói nossa Igreja.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1 },
  content: { padding: 25 },
  header: { alignItems: 'center', marginBottom: 30 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#5D4037', textAlign: 'center' },
  divisor: { height: 3, width: 40, backgroundColor: '#8D6E63', marginVertical: 15, borderRadius: 2 },
  sub: { fontSize: 15, color: '#8D6E63', textAlign: 'center', lineHeight: 22 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    // Sombra
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    overflow: 'hidden',
  },
  barraLateral: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
  },
  circuloIcone: { 
    width: 55, 
    height: 55, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textoContainer: { flex: 1, marginLeft: 15 },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#3E2723' },
  textoDescricao: { fontSize: 13, color: '#8D6E63', marginTop: 3 },
  footer: { marginTop: 20, alignItems: 'center' },
  footerTexto: { fontSize: 12, color: '#BDBDBD', fontStyle: 'italic' }
});