import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function TercoGozoso({ navigation }) {
  const [indexAtual, setIndexAtual] = useState(0);
  const flatListRef = useRef(null);

  const montarDados = () => {
    let d = [];

    // --- INÍCIO ---
    d.push({ id: '1', titulo: "Sinal da Cruz", texto: "Pelo sinal da Santa Cruz, livrai-nos, Deus, Nosso Senhor, dos nossos inimigos.\n\nEm nome do Pai e do Filho e do Espírito Santo. Amém." });
    
    d.push({ id: '2', titulo: "Oferecimento", texto: "Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da nossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.\n\nOferecemos particularmente, em desagravo dos pecados cometidos contra o Santíssimo Coração de Jesus e Imaculado Coração de Maria, pela paz do mundo, pela conversão dos pecadores, pelas almas do Purgatório, pelas intenções do Santo Padre, pelo aumento e santificação do Clero, pelo nosso vigário, pela santificação das famílias, pelas missões, pelos doentes, pelos agonizantes, por todos aqueles que pediram nossas orações, pelo nosso país e por todas as nossas intenções particulares." });

    d.push({ id: '3', titulo: "Creio", texto: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, [Às palavras seguintes, até “Virgem Maria”, todos se inclinam.] que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém." });

    d.push({ id: '4', titulo: "Pai-Nosso", texto: "Pai-Nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém." });

    // --- 3 AVE MARIAS INICIAIS (COM CONTADOR) ---
    for (let i = 1; i <= 3; i++) {
      d.push({ 
        id: `ave-ini-${i}`, 
        titulo: "Orações Iniciais", 
        subtitulo: "Ave-Maria", 
        texto: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.\n\nSanta Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.",
        isC: true, 
        cA: i,
        total: 3
      });
    }

    d.push({ id: 'gl-ini', titulo: "Glória", texto: "Glória ao Pai, e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém." });

    // --- MISTÉRIOS ---
    const mistérios = [
      { 
        t: "1º MISTÉRIO GOZOSO", 
        s: "A Anunciação", 
        biblia: "Lc 1, 26-27\nNaquele tempo, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem, prometida em casamento a um homem chamado José. Ele era descendente de Davi e o nome da virgem era Maria.",
        pedimos: "Senhor, honramos a Vossa Encarnação no seio de Maria. Vos pedimos e à Mãe Santíssima, humildade e espírito de oração.",
        cic: "A Anunciação a Maria inaugura a «plenitude dos tempos» (Gl 4, 4), isto é, o cumprimento das promessas e das preparações. (CIC, 484)"
      },
      { 
        t: "2º MISTÉRIO GOZOSO", 
        s: "A Visitação", 
        biblia: "Lc 1, 39-42\nNaqueles dias, Maria partiu para a região montanhosa... Isabel ficou cheia do Espírito Santo. Com um grande grito, exclamou: “Bendita és tu entre as mulheres e bendito é o fruto do teu ventre!”",
        pedimos: "Senhor, honramos a visitação de Vossa Mãe à prima Isabel. Vos pedimos e à Mãe Santíssima, a caridade para com o próximo.",
        cic: "A «visitação» de Maria a Isabel tornou-se, assim, «visita de Deus ao seu povo» (CIC, 717)"
      },
      { 
        t: "3º MISTÉRIO GOZOSO", 
        s: "Nascimento de Jesus", 
        biblia: "Lc 2, 1-7\n...Maria deu à luz o seu filho primogênito. Ela o enfaixou e o colocou na manjedoura, pois não havia lugar para eles na hospedaria.",
        pedimos: "Senhor, honramos o Vosso nascimento. Vos pedimos e à Mãe Santíssima, o desapego dos bens terrenos e o amor à pobreza.",
        cic: "«Jesus nasceu na humildade de um estábulo, em uma família pobre. É nesta pobreza que se manifesta a glória do Céu» (CIC, 525)"
      },
      { 
        t: "4º MISTÉRIO GOZOSO", 
        s: "Apresentação no Templo", 
        biblia: "Lc 2, 21-24\n...levaram o menino a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na Lei do Senhor.",
        pedimos: "Senhor, honramos a Vossa apresentação no Templo. Vos pedimos e à Mãe Santíssima, que cada um de nós seja consagrado ao Pai Eterno.",
        cic: "«A circuncisão de Jesus... é sinal da sua inserção na descendência de Abraão, no povo da Aliança, da sua submissão à Lei» (CIC, 527)"
      },
      { 
        t: "5º MISTÉRIO GOZOSO", 
        s: "Encontro no Templo", 
        biblia: "Lc 2, 41-47\nTrês dias depois, o encontraram no Templo. Estava sentado no meio dos mestres... maravilhado com sua inteligência.",
        pedimos: "Senhor, honramos Vossa perda e o reencontro por Maria e José. Vos pedimos e à Mãe Santíssima, o amor à casa e às coisas do Pai.",
        cic: "«O reencontro de Jesus no templo deixa entrever o mistério de sua consagração total a uma missão: Não sabíeis que Eu tenho de estar naquilo que é de meu Pai?». (CIC, 534)"
      }
    ];

    mistérios.forEach((m, idx) => {
      // 1. Contemplação (Texto Bíblico + Pedimos + CIC)
      d.push({ 
        id: `cont-${idx}`, 
        titulo: m.t, 
        subtitulo: m.s, 
        texto: `${m.biblia}\n\n${m.pedimos}\n\n${m.cic}` 
      });

      // 2. Pai Nosso
      d.push({ id: `p-mist-${idx}`, titulo: m.t, subtitulo: "Pai-Nosso", texto: "Pai-Nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém." });

      // 3. 10 Ave Marias
      for (let j = 1; j <= 10; j++) {
        d.push({ 
          id: `a-mist-${idx}-${j}`, 
          titulo: m.t, 
          subtitulo: "Ave-Maria", 
          texto: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.\n\nSanta Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.",
          isC: true, 
          cA: j,
          total: 10
        });
      }

      // 4. Glória e Oração final da dezena
      d.push({ 
        id: `g-mist-${idx}`, 
        titulo: m.t, 
        subtitulo: "Glória / Jaculatória", 
        texto: "Glória ao Pai, e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.\n\nÓ meu Jesus, perdoai-nos e livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem." 
      });
    });

    // --- ENCERRAMENTO ---
    d.push({ id: 'agrad', titulo: "Agradecimento", texto: "Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo de vosso poderoso amparo e para mais vos alegrar vos saudamos com uma Salve Rainha:" });
    
    d.push({ id: 'salve', titulo: "Salve Rainha", texto: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, Salve! A vós bradamos, os degredados filhos de Eva, a vós suspiramos, gemendo e chorando neste vale de lágrimas! Eia, pois, Advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre! Ó clemente, ó piedosa, ó doce sempre Virgem Maria.\n\nRogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém." });

    return d;
  };

  const lista = montarDados();

  const navegar = (i) => {
    if (i >= 0 && i < lista.length) {
      flatListRef.current?.scrollToIndex({ index: i, animated: true });
      setIndexAtual(i);
    } else if (i === lista.length) {
      navigation.navigate('MenuTerco');
    }
  };

  const renderCard = ({ item }) => (
    <View style={styles.folha}>
      <View style={styles.cartao}>
        <Text style={styles.txtMisterio}>{item.titulo}</Text>
        {item.subtitulo && <Text style={styles.txtSub}>{item.subtitulo}</Text>}
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Text style={styles.txtOracao}>{item.texto}</Text>
        </ScrollView>
      </View>
      <View style={styles.rodape}>
        {item.isC ? (
          <View style={styles.boxC}>
            <Text style={styles.txtNum}>{item.cA} / {item.total}</Text>
            <View style={styles.trilha}>
              {Array.from({ length: item.total }).map((_, i) => (
                <View key={i} style={[styles.ponto, item.cA === i + 1 ? styles.pontoOn : i < item.cA ? styles.pontoCheck : styles.pontoOff]} />
              ))}
            </View>
          </View>
        ) : <Text style={styles.txtPasso}>Passo {indexAtual + 1} de {lista.length}</Text>}
      </View>
    </View>
  );

  return (
    <LinearGradient colors={['#4E342E', '#3E2723']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topo}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="close-circle" size={32} color="#D7CCC8" /></TouchableOpacity>
          <Text style={styles.txtTopo}>Mistérios Gozosos</Text>
          <View style={{ width: 32 }} />
        </View>
        <FlatList
          ref={flatListRef}
          data={lista}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => setIndexAtual(Math.round(e.nativeEvent.contentOffset.x / width))}
        />
        <View style={styles.btns}>
          <TouchableOpacity onPress={() => navegar(indexAtual - 1)} style={[styles.seta, indexAtual === 0 && { opacity: 0 }]}><Ionicons name="arrow-back-circle" size={60} color="#D7CCC8" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navegar(indexAtual + 1)}><Ionicons name={indexAtual === lista.length - 1 ? "checkmark-done-circle" : "arrow-forward-circle"} size={75} color={indexAtual === lista.length - 1 ? "#00E676" : "#A1887F"} /></TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  txtTopo: { color: '#D7CCC8', fontSize: 16, fontWeight: 'bold' },
  folha: { width: width, flex: 1, alignItems: 'center' },
  cartao: { flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 10 },
  txtMisterio: { color: '#A1887F', fontSize: 12, fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' },
  txtSub: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 8, textAlign: 'center' },
  txtOracao: { color: '#fff', fontSize: 19, textAlign: 'center', lineHeight: 28, fontStyle: 'italic' },
  rodape: { height: 90, justifyContent: 'center' },
  boxC: { alignItems: 'center' },
  txtNum: { color: '#A1887F', fontWeight: 'bold' },
  trilha: { flexDirection: 'row', marginTop: 10 },
  ponto: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 3 },
  pontoOn: { backgroundColor: '#FFF', width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#A1887F' },
  pontoCheck: { backgroundColor: '#A1887F' },
  pontoOff: { backgroundColor: 'rgba(215, 204, 200, 0.2)' },
  txtPasso: { color: '#795548', fontSize: 12 },
  btns: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20, gap: 40 },
  seta: { justifyContent: 'center', alignItems: 'center' }
});