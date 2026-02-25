import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function TercoMisericordia({ navigation }) {
  const [indexAtual, setIndexAtual] = useState(0);
  const flatListRef = useRef(null);

  const montarTerco = () => {
    let estrutura = [
      { 
        id: '1', 
        titulo: "Sinal da Cruz", 
        texto: "Pelo sinal da Santa Cruz, livrai-nos, Deus, Nosso Senhor, dos nossos inimigos. Em nome do Pai e do Filho e do Espírito Santo. Amém.", 
        isContador: false 
      },
      { 
        id: '2', 
        titulo: "Pai-Nosso", 
        texto: "Pai-Nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.", 
        isContador: false 
      },
      { 
        id: '3', 
        titulo: "Ave-Maria", 
        texto: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.", 
        isContador: false 
      },
      { 
        id: '4', 
        titulo: "Credo", 
        texto: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém.", 
        isContador: false 
      }
    ];

    for (let i = 1; i <= 5; i++) {
      // Conta Grande
      estrutura.push({ 
        id: `eterno-${i}`, 
        titulo: `${i}ª Dezena`, 
        subtitulo: "Eterno Pai",
        texto: "Eterno Pai, eu Vos ofereço o Corpo e Sangue, Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro.",
        isContador: false 
      });

      // 10 Contas Pequenas
      for (let j = 1; j <= 10; j++) {
        estrutura.push({ 
          id: `dezena-${i}-${j}`, 
          titulo: `${i}ª Dezena`, 
          subtitulo: `Oração da Misericórdia`,
          texto: "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.",
          isContador: true,
          contaAtual: j,
          totalContas: 10
        });
      }
    }

    // Deus Santo (3x)
    for (let k = 1; k <= 3; k++) {
      estrutura.push({ 
        id: `final-${k}`, 
        titulo: "Oração Final", 
        subtitulo: "Deus Santo",
        texto: "Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.", 
        isContador: true,
        contaAtual: k,
        totalContas: 3
      });
    }

    // Encerramento
    estrutura.push({ 
        id: 'confianca', 
        titulo: "Encerramento", 
        subtitulo: "Oração de Confiança",
        texto: "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!", 
        isContador: false 
    });

    return estrutura;
  };

  const dadosTerco = montarTerco();

  // Função para mudar página via botão
  const navegarPara = (index) => {
    if (index >= 0 && index < dadosTerco.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      setIndexAtual(index);
    } else if (index === dadosTerco.length) {
      navigation.navigate('MenuTerco');
    }
  };

  // Sincroniza o index quando o usuário desliza o dedo
  const aoDeslizar = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndexAtual(viewableItems[0].index);
    }
  }).current;

  const renderItem = ({ item }) => (
    <View style={styles.pagina}>
      <View style={styles.cardConteudo}>
        <Text style={styles.tituloEtapa}>{item.titulo}</Text>
        {item.subtitulo && <Text style={styles.subtituloEtapa}>{item.subtitulo}</Text>}
        
        <View style={styles.areaTexto}>
            <Text style={styles.textoOracao}>{item.texto}</Text>
        </View>
      </View>

      <View style={styles.areaContador}>
        {item.isContador ? (
          <View style={styles.containerBolinhas}>
            <Text style={styles.txtConta}>{item.contaAtual} / {item.totalContas}</Text>
            <View style={styles.filaBolinhas}>
              {Array.from({ length: item.totalContas }, (_, i) => i + 1).map((i) => (
                <View 
                  key={i} 
                  style={[
                    styles.bolinha, 
                    item.contaAtual === i ? styles.bolinhaAtiva : 
                    i < item.contaAtual ? styles.bolinhaConcluida : styles.bolinhaInativa
                  ]} 
                />
              ))}
            </View>
          </View>
        ) : (
          <Text style={styles.txtProgresso}>Passo {indexAtual + 1} de {dadosTerco.length}</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.flexContainer}>
      <LinearGradient colors={['#4E342E', '#3E2723']} style={styles.gradient}>
        <SafeAreaView style={{ flex: 1 }}>
          
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-circle" size={32} color="#D7CCC8" />
            </TouchableOpacity>
            <Text style={styles.tituloHeader}>Terço da Misericórdia</Text>
            <View style={{ width: 32 }} />
          </View>

          <FlatList
            ref={flatListRef}
            data={dadosTerco}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={aoDeslizar}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            extraData={indexAtual}
          />

          <View style={styles.footer}>
            <TouchableOpacity 
                onPress={() => navegarPara(indexAtual - 1)} 
                style={[styles.btnNav, indexAtual === 0 && {opacity: 0}]}
            >
              <Ionicons name="arrow-back-circle" size={60} color="#D7CCC8" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navegarPara(indexAtual + 1)} style={styles.btnNav}>
              <Ionicons 
                name={indexAtual === dadosTerco.length - 1 ? "checkmark-done-circle" : "arrow-forward-circle"} 
                size={75} 
                color={indexAtual === dadosTerco.length - 1 ? "#00E676" : "#A1887F"} 
              />
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  gradient: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  tituloHeader: { color: '#D7CCC8', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 },
  pagina: { width: width, flex: 1, alignItems: 'center', justifyContent: 'space-between' },
  cardConteudo: { flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 30, alignItems: 'center' },
  tituloEtapa: { color: '#A1887F', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 5 },
  subtituloEtapa: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  areaTexto: { flex: 1, justifyContent: 'center' },
  textoOracao: { color: '#fff', fontSize: 22, textAlign: 'center', lineHeight: 34, fontStyle: 'italic' },
  areaContador: { height: 100, justifyContent: 'center', alignItems: 'center', width: '100%' },
  containerBolinhas: { alignItems: 'center' },
  txtConta: { color: '#A1887F', fontWeight: 'bold', marginBottom: 10 },
  filaBolinhas: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  bolinha: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 3 },
  bolinhaAtiva: { backgroundColor: '#FFF', width: 14, height: 14, borderRadius: 7, borderWidth: 2, borderColor: '#A1887F' },
  bolinhaConcluida: { backgroundColor: '#A1887F' },
  bolinhaInativa: { backgroundColor: 'rgba(215, 204, 200, 0.2)' },
  txtProgresso: { color: '#795548', fontSize: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 30, gap: 40 },
  btnNav: { justifyContent: 'center', alignItems: 'center' }
});