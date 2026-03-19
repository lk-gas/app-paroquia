import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const fotoIgreja = require('../../../assets/icon_saolucas.png'); 
const fotoPadre = require('../../../assets/icon_padre.jpeg'); 

export default function HistoriaScreen() {
  return (
    <ScrollView style={styles.container} bounces={true}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.headerImagem}>
        <Image source={fotoIgreja} style={styles.imagemFundo} />
        <View style={styles.overlay} />
        <Text style={styles.tituloHeader}>Nossa História</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.subtituloIgreja}>Paróquia São Lucas Evangelista</Text>
        <View style={styles.linha} />

        <Text style={styles.textoHistoria}>
          A Paróquia São Lucas Evangelista nasceu do sonho e da fé de uma comunidade vibrante. 
          Ela se tornou um farol de esperança e caridade na região de Carapicuíba.
          {"\n\n"}
          Hoje, continuamos essa missão, celebrando os sacramentos e servindo aos mais necessitados, 
          sempre sob a guia do nosso pároco e com a intercessão de Maria Santíssima.
        </Text>

        <View style={styles.cardCitacao}>
          <Text style={styles.textoCitacao}>
            "Pois decidi nada saber entre vós, a não ser Jesus Cristo, e este, crucificado."
          </Text>
          <Text style={styles.autorCitacao}>— São Lucas</Text>
        </View>

        <View style={styles.secaoPadre}>
          <View style={styles.cardInfoPadre}>
            <View style={styles.avatarPadre}>
              <Image source={fotoPadre} style={styles.fotoPerfil} /> 
            </View>
            <View style={styles.nomePadreContainer}>
              <Text style={styles.nomePadre}>Padre Márcio</Text>
              <Text style={styles.cargoPadre}>Pároco Atual</Text>
            </View>
          </View>

          <View style={styles.cardTextoPadre}>
            <Text style={styles.biografiaPadre}>
              O Padre Márcio tomou posse na Paróquia São Lucas Evangelista em 14 de maio de 2024, após uma década como pároco da Paróquia Santa Cruz. 
              {"\n\n"}
              Com seu pastoreio dedicado, tem conduzido nossa comunidade com amor, 
              foco na evangelização e no cuidado com as famílias.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerImagem: { width: width, height: 240, justifyContent: 'flex-end' },
  imagemFundo: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(93, 64, 55, 0.5)' },
  tituloHeader: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginLeft: 20, marginBottom: 20 },
  
  corpo: { padding: 20, marginTop: -25, backgroundColor: '#F8F9FA', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  subtituloIgreja: { fontSize: 22, fontWeight: 'bold', color: '#5D4037', textAlign: 'center' },
  linha: { height: 3, backgroundColor: '#8D6E63', width: 60, alignSelf: 'center', marginVertical: 15, borderRadius: 2 },
  textoHistoria: { fontSize: 16, color: '#4E342E', lineHeight: 26, textAlign: 'justify' },

  cardCitacao: { backgroundColor: '#fff', padding: 18, borderRadius: 12, marginVertical: 25, borderLeftWidth: 5, borderLeftColor: '#8D6E63', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  textoCitacao: { fontStyle: 'italic', color: '#5D4037', fontSize: 15, lineHeight: 22 },
  autorCitacao: { textAlign: 'right', fontWeight: 'bold', marginTop: 8, color: '#8D6E63' },

  secaoPadre: { marginTop: 10, marginBottom: 40 },
  cardInfoPadre: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 20, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    alignItems: 'center',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1'
  },
  avatarPadre: { 
    width: 110,      
    height: 110,     
    borderRadius: 15, 
    backgroundColor: '#EFEBE9', 
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#8D6E63'
  },
  fotoPerfil: { width: '100%', height: '100%', resizeMode: 'cover' },
  
  nomePadreContainer: { marginLeft: 18, flex: 1 },
  nomePadre: { fontSize: 24, fontWeight: 'bold', color: '#3E2723' },
  cargoPadre: { fontSize: 17, color: '#757575', marginTop: 4 },
  
  cardTextoPadre: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  biografiaPadre: { fontSize: 16, color: '#4E342E', lineHeight: 24, textAlign: 'justify' }
});