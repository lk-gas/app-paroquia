import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar, Dimensions, Platform, FlatList } from 'react-native';

const { width } = Dimensions.get('window');

const imagensParoquia = [
  { id: '1', source: require('../../../assets/icon_historia1.jpeg') }, 
  { id: '2', source: require('../../../assets/icon_historia2.jpeg') }, 
  { id: '3', source: require('../../../assets/icon_historia3.jpeg') }, 
  { id: '4', source: require('../../../assets/icon_saolucas.png') }, 
];

const fotoPadre = require('../../../assets/icon_padre.jpeg'); 

const SliderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={item.source} style={styles.imagemSlider} />
    <View style={styles.overlay} />
  </View>
);

export default function HistoriaScreen() {
  const flatListRef = useRef(null);
  const [indexAtivo, setIndexAtivo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let proximoIndex = (indexAtivo + 1) % imagensParoquia.length;
      
      flatListRef.current?.scrollToIndex({ index: proximoIndex, animated: true });
      setIndexAtivo(proximoIndex);
    }, 5000); 

    return () => clearInterval(timer);
  }, [indexAtivo]);

  const aoMudarVisualizacao = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndexAtivo(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <View style={styles.headerSlider}>
        <FlatList
          ref={flatListRef}
          data={imagensParoquia}
          renderItem={SliderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={aoMudarVisualizacao}
          viewabilityConfig={viewabilityConfig}
          style={{ width: width }}
        />

        <View style={styles.paginacao}>
          {imagensParoquia.map((item, index) => (
            <View 
              key={item.id} 
              style={[
                styles.pontoPaginacao, 
                index === indexAtivo ? styles.pontoAtivo : null
              ]} 
            />
          ))}
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.tituloHeader}>Nossa História</Text>
        </View>
      </View>

      <View style={styles.corpo}>
        <View style={styles.indicadorModal} />
        
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
          <Text style={styles.aspas}>“</Text>
          <Text style={styles.textoCitacao}>
            Pois decidi nada saber entre vós, a não ser Jesus Cristo, e este, crucificado.
          </Text>
          <Text style={styles.autorCitacao}>— SÃO LUCAS</Text>
        </View>

        <View style={styles.secaoPadreDestaque}>
          <Image source={fotoPadre} style={styles.fotoPadreGrande} /> 
          
          <View style={styles.infoPadreGrande}>
            <Text style={styles.nomePadreGrande}>Padre Márcio</Text>
            <View style={styles.badgeCargoGrande}>
              <Text style={styles.cargoPadreGrande}>PÁROCO ATUAL</Text>
            </View>
          </View>
          
          <Text style={styles.biografiaPadreDestaque}>
            O Padre Márcio tomou posse em 14 de maio de 2024. Com um pastoreio dedicado, 
            tem conduzido nossa comunidade com foco na evangelização e no cuidado com as famílias.
            Com sua presença acolhedora e palavras inspiradoras, ele fortalece os laços de fé 
            e união entre todos os paroquianos, incentivando-nos a viver o Evangelho diariamente.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5D4037' }, 
  
  headerSlider: { width: width, height: 320, justifyContent: 'flex-end', position: 'relative' },
  slide: { width: width, height: 320 },
  imagemSlider: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  
  paginacao: { 
    position: 'absolute', 
    bottom: 70, 
    left: 25, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  pontoPaginacao: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginRight: 6 },
  pontoAtivo: { backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5 },

  headerContent: { paddingHorizontal: 25, paddingBottom: 30, position: 'absolute', bottom: 0, left: 0, right: 0 },
  tituloHeader: { fontSize: 36, fontWeight: 'bold', color: '#fff' },
  
  corpo: { 
    marginTop: -30, 
    backgroundColor: '#FDFCFB', 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 35, 
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 40,
  },
  indicadorModal: { width: 40, height: 5, backgroundColor: '#E0E0E0', borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  
  subtituloIgreja: { fontSize: 22, fontWeight: '700', color: '#3E2723', textAlign: 'center' },
  linha: { height: 4, backgroundColor: '#A1887F', width: 45, alignSelf: 'center', marginVertical: 15, borderRadius: 10 },
  
  textoHistoria: { fontSize: 16, color: '#5D4037', lineHeight: 26, textAlign: 'justify', opacity: 0.9 },

  cardCitacao: { 
    backgroundColor: '#F5F5F5', 
    padding: 25, 
    borderRadius: 20, 
    marginVertical: 30, 
    position: 'relative',
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  aspas: { position: 'absolute', top: -10, left: 15, fontSize: 60, color: '#A1887F', opacity: 0.3, fontWeight: 'bold' },
  textoCitacao: { fontStyle: 'italic', color: '#4E342E', fontSize: 16, lineHeight: 24, textAlign: 'center' },
  autorCitacao: { textAlign: 'center', fontWeight: '800', marginTop: 12, color: '#8D6E63', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' },

  secaoPadreDestaque: { 
    marginTop: 10, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 24, 
    padding: 25,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.08, shadowRadius: 12 },
      android: { elevation: 5 }
    }),
    borderWidth: 1,
    borderColor: '#F1F1F1'
  },
  fotoPadreGrande: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20, 
    backgroundColor: '#EFEBE9',
    borderWidth: 3,
    borderColor: '#A1887F'
  },
  infoPadreGrande: { alignItems: 'center', marginBottom: 20 },
  nomePadreGrande: { fontSize: 26, fontWeight: 'bold', color: '#3E2723' },
  badgeCargoGrande: { 
    backgroundColor: '#EFEBE9', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 10, 
    marginTop: 8 
  },
  cargoPadreGrande: { fontSize: 12, fontWeight: '700', color: '#8D6E63', letterSpacing: 0.5 },
  
  biografiaPadreDestaque: { fontSize: 16, color: '#5D4037', lineHeight: 25, textAlign: 'justify', opacity: 0.9 }
});