import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OracoesScreen({ navigation }) {
  
  const listaOracoes = [
    { 
      id: '1', 
      titulo: 'Pai Nosso', 
      icone: 'hand-left-outline',
      texto: 'Pai-Nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém'
    },
    { 
      id: '2', 
      titulo: 'Ave Maria', 
      icone: 'heart-outline',
      texto: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.'
    },
    { 
      id: '3', 
      titulo: 'Glória ao Pai', 
      icone: 'sunny-outline',
      texto: 'Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.'
    },
    { 
      id: '4', 
      titulo: 'Oração de São Lucas', 
      icone: 'brush-outline', // Mudado para pincel (ícone clássico de Lucas médico/pintor)
      texto: 'Ó Deus, que escolhestes São Lucas para revelar em suas palavras e escritos o mistério do vosso amor para com os pobres, concedei aos que já se gloriam do vosso nome perseverar num só coração e numa só alma, e a todos os povos do mundo ver a vossa salvação.Por vosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo.Ó Senhor, nos abençoe, nos livre de todo o mal, nos conduza à vida eterna. Amém.São Lucas Evangelista, rogai por nós.'
    },
    { 
      id: '5', 
      titulo: 'Oração de Santa Teresinha', 
      icone: 'flower-outline', // Ícone de flor (Rosas de Teresinha)
      texto: 'Ó Deus, que escolhestes São Lucas para revelar em suas palavras e escritos o mistério do vosso amor para com os pobres, concedei aos que já se gloriam do vosso nome perseverar num só coração e numa só alma, e a todos os povos do mundo ver a vossa salvação.Por vosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo.Ó Senhor, nos abençoe, nos livre de todo o mal, nos conduza à vida eterna. Amém.São Lucas Evangelista, rogai por nós.'
    },
    { 
      id: '6', 
      titulo: 'Santo Anjo do Senhor', 
      icone: 'cloud-outline',
      texto: 'Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina sempre me rege, me guarda, me governa e me ilumina. Amém!'
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.titulo}>Devocionário</Text>
          <Text style={styles.subtitulo}>Orações para o seu dia a dia</Text>
        </View>
        
        <View style={styles.lista}>
          {listaOracoes.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.cardOracao}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('DetalheOracao', { titulo: item.titulo, texto: item.texto })}
            >
              <View style={styles.iconCircle}>
                 <Ionicons name={item.icone} size={22} color="#8D6E63" />
              </View>
              <Text style={styles.textoOracao}>{item.titulo}</Text>
              <Ionicons name="chevron-forward" size={18} color="#D7CCC8" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.footer}>Paróquia São Lucas Evangelista</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#8D6E63' },
  container: { padding: 20, paddingBottom: 40 },
  header: { alignItems: 'center', marginBottom: 30, marginTop: 10 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  subtitulo: { fontSize: 16, color: '#EFEBE9', opacity: 0.9, marginTop: 5 },
  lista: { width: '100%' },
  cardOracao: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 20, 
    marginBottom: 14, 
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },
  iconCircle: { 
    width: 42, 
    height: 42, 
    borderRadius: 12, // Quadrado arredondado fica mais moderno que círculo perfeito
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textoOracao: { 
    flex: 1, 
    fontSize: 18, 
    color: '#3E2723', 
    fontWeight: '600', 
    marginLeft: 15 
  },
  footer: { 
    textAlign: 'center', 
    color: '#EFEBE9', 
    fontSize: 12, 
    marginTop: 20, 
    opacity: 0.7,
    fontStyle: 'italic'
  }
});