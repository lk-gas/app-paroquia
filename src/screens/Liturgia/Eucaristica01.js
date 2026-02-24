import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import CaixaVariacao from '../components/CaixaVariacao';

export default function Eucaristica01() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.tituloHeader}>Oração Eucarística I</Text>
        <Text style={styles.subtituloHeader}>(Cânon Romano)</Text>
        <View style={styles.divisor} />

        {/* --- DIÁLOGO INICIAL --- */}
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> O Senhor esteja convosco.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> Ele está no meio de nós.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Corações ao alto.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> O nosso coração está em Deus.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Demos graças ao Senhor, nosso Deus.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> É nosso dever e nossa salvação.</Text>

        <Text style={styles.instrucao}>O sacerdote diz o Prefácio. Ao fim, todos cantam/rezam:</Text>
        <Text style={styles.textoPovo}>Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!</Text>

        <Text style={styles.instrucao}>O sacerdote, de braços abertos, diz:</Text>
        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Pai de misericórdia, a quem sobem nossos louvores, suplicantes, vos rogamos e pedimos por Jesus Cristo, vosso Filho e Senhor nosso, que aceiteis e abençoeis <Text style={styles.rubrica}>✠</Text> estes dons, estas oferendas, este sacrifício puro e santo, que oferecemos, antes de tudo, pela vossa Igreja santa e católica: concedei-lhe paz e proteção, unindo-a num só corpo e governando-a por toda a terra, em comunhão com vosso servo o Papa <Text style={styles.rubricaBold}>N.</Text>, o nosso Bispo <Text style={styles.rubricaBold}>N.</Text>, e todos os que guardam a fé católica que receberam dos Apóstolos.
        </Text>
        <Text style={styles.textoPovo}>Abençoai nossa oferenda, ó Senhor!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>1C </Text>Lembrai-vos, ó Pai, dos vossos filhos e filhas <Text style={styles.rubricaBold}>N. N.</Text> e de todos os que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço. Por eles nós vos oferecemos e também eles vos oferecem este sacrifício de louvor por si e por todos os seus, e elevam a vós as suas preces, Deus eterno, vivo e verdadeiro, para alcançar o perdão de suas faltas, a segurança em suas vidas e a salvação que esperam.
        </Text>
        <Text style={styles.textoPovo}>Lembrai-vos, ó Pai, dos vossos filhos!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>2C </Text>Em comunhão com toda a Igreja, veneramos a memória da gloriosa sempre Virgem Maria, Mãe de nosso Deus e Senhor Jesus Cristo; a de seu esposo São José, e também a dos vossos Santos Apóstolos e Mártires: Pedro e Paulo, André, Tiago e João, Tomé, Tiago e Filipe, Bartolomeu e Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Sisto, Cornélio e Cipriano, Lourenço e Crisógono, João e Paulo, Cosme e Damião e a de todos os vossos Santos. Por seus méritos e preces concedei-nos sem cessar a vossa proteção.
        </Text>
        <Text style={styles.textoPovo}>Em comunhão com vossos Santos vos louvamos!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; dai-nos sempre a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Dignai-vos, ó Pai, aceitar, abençoar e santificar estas oferendas; recebei-as como sacrifício espiritual perfeito, a fim de que se tornem para nós o Corpo e o Sangue de vosso amado Filho, nosso Senhor Jesus Cristo.
        </Text>
        <Text style={styles.textoPovo}>Enviai o vosso Espírito Santo!</Text>

        {/* --- CONSAGRAÇÃO --- */}
        <View style={styles.blocoConsagracao}>
          <Text style={styles.instrucao}>Na véspera de sua paixão, ele tomou o pão...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.instrucao}>Do mesmo modo, no fim da Ceia, ele tomou o cálice...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.</Text>
        </View>

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Mistério da fé!</Text>
        <Text style={styles.textoPovo}>Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Celebrando, pois, a memória da bem-aventurada paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício puro, santo e imaculado: o Pão santo da vida eterna e o Cálice da salvação.
        </Text>

        <Text style={styles.textoPadre}>
          Recebei, ó Pai, com olhar benigno, esta oferta, como recebestes os dons do justo Abel, o sacrifício de nosso patriarca Abraão e a oblação pura e santa do sumo sacerdote Melquisedeque.
        </Text>
        <Text style={styles.textoPovo}>Aceitai, ó Senhor, a nossa oferta!</Text>

        <Text style={styles.textoPadre}>
          Suplicantes, vos pedimos, ó Deus onipotente, que esta nossa oferenda seja levada à vossa presença, no altar do céu, pelas mãos do vosso anjo, para que todos nós, participando deste altar pela comunhão do santíssimo Corpo e Sangue do vosso Filho, sejamos repletos de todas as graças e bênçãos do céu.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>3C </Text>Lembrai-vos, ó Pai, dos vossos filhos e filhas <Text style={styles.rubricaBold}>N. N.</Text> que nos precederam com o sinal da fé e dormem o sono da paz. A eles, e a todos os que descansam no Cristo, concedei o repouso, a luz e a paz.
        </Text>
        <Text style={styles.textoPovo}>Concedei-lhes, ó Senhor, a luz eterna!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>4C </Text>E a todos nós pecadores, que esperamos na vossa infinita misericórdia, concedei o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé, Inácio, Alexandre, Marcelino e Pedro, Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia e todos os vossos Santos. Admiti-nos em sua companhia, não por nossos méritos, mas pela vossa bondade e perdão.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Por ele não cessais de criar, santificar, vivificar, abençoar estes bens e distribuí-los entre nós.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP/CC </Text>Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.
        </Text>

        <View style={styles.blocoAmem}>
          <Text style={styles.textoAmem}>AMÉM.</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTexto}>Paróquia São Lucas Evangelista</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { padding: 20, paddingBottom: 60 },
  tituloHeader: { fontSize: 24, fontWeight: 'bold', color: '#5D4037', textAlign: 'center' },
  subtituloHeader: { fontSize: 16, color: '#8D6E63', textAlign: 'center', fontStyle: 'italic' },
  divisor: { height: 2, backgroundColor: '#8D6E63', width: 80, alignSelf: 'center', marginVertical: 20 },
  textoPadre: { fontSize: 18, color: '#333', lineHeight: 28, marginBottom: 15, textAlign: 'justify' },
  textoPovo: { fontSize: 18, color: '#D32F2F', fontWeight: 'bold', backgroundColor: '#FBE9E7', padding: 18, borderRadius: 12, marginBottom: 20, lineHeight: 26 },
  rubrica: { color: '#B71C1C', fontWeight: 'bold' },
  rubricaBold: { color: '#5D4037', fontWeight: 'bold' },
  instrucao: { fontSize: 14, color: '#757575', fontStyle: 'italic', marginBottom: 12, textAlign: 'center' },
  blocoConsagracao: { backgroundColor: '#FFF', padding: 20, borderTopWidth: 3, borderBottomWidth: 3, borderColor: '#B71C1C', marginVertical: 25 },
  textoConsagracao: { fontSize: 21, fontWeight: 'bold', color: '#000', textAlign: 'center', textTransform: 'uppercase', lineHeight: 30 },
  blocoAmem: { backgroundColor: '#D32F2F', padding: 20, borderRadius: 15, marginTop: 20, alignItems: 'center' },
  textoAmem: { color: '#FFF', fontSize: 26, fontWeight: 'bold' },
  footer: { marginTop: 40, borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 20 },
  footerTexto: { textAlign: 'center', color: '#999', fontStyle: 'italic' }
});