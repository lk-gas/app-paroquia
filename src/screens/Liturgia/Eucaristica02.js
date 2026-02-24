import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Eucaristica02() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.tituloHeader}>Oração Eucarística II</Text>
        <Text style={styles.subtituloHeader}>(Baseada no texto de Hipólito de Roma)</Text>
        <View style={styles.divisor} />

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> O Senhor esteja convosco.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> Ele está no meio de nós.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Corações ao alto.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> O nosso coração está em Deus.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Demos graças ao Senhor, nosso Deus.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> É nosso dever e nossa salvação.</Text>

        <Text style={styles.instrucao}>O sacerdote prossegue com o Prefácio. Ao fim, todos rezam:</Text>
        <Text style={styles.textoPovo}>Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Na verdade, ó Pai, vós sois santo e fonte de toda santidade.
        </Text>

        <Text style={styles.instrucao}>O sacerdote, de mãos estendidas sobre as oferendas:</Text>
        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Santificai, pois, estes dons, derramando sobre eles o vosso Espírito, a fim de que se tornem para nós o Corpo e <Text style={styles.rubrica}>✠</Text> o Sangue de nosso Senhor Jesus Cristo.
        </Text>
        <Text style={styles.textoPovo}>Santificai nossa oferenda, ó Senhor!</Text>

        <View style={styles.blocoConsagracao}>
          <Text style={styles.instrucao}>Estando para ser entregue e abraçando livremente a paixão...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE... FAZEI ISTO EM MEMÓRIA DE MIM.</Text>
        </View>

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Mistério da fé!</Text>
        <Text style={styles.textoPovo}>Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Celebrando, pois, a memória da morte e ressurreição do vosso Filho, nós vos oferecemos, ó Pai, o pão da vida e o cálice da salvação; e vos agradecemos porque nos admitistes a estar aqui na vossa presença e vos servir.
        </Text>
        <Text style={styles.textoPovo}>Recebei, ó Senhor, a nossa oferta!</Text>

        <Text style={styles.textoPadre}>
          E vos suplicamos que, participando do Corpo e Sangue de Cristo, sejamos reunidos pelo Espírito Santo num só corpo.
        </Text>
        <Text style={styles.textoPovo}>O Espírito nos una num só corpo!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>1C </Text>Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro: que ela cresça na caridade com o Papa <Text style={styles.rubricaBold}>N.</Text>, com o nosso Bispo <Text style={styles.rubricaBold}>N.</Text> e todos os ministros do vosso povo.
        </Text>
        <Text style={styles.textoPovo}>Lembrai-vos, ó Pai, da vossa Igreja!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>2C </Text>Lembrai-vos também dos nossos irmãos e irmãs que morreram na esperança da ressurreição e de todos os que partiram desta vida: acolhei-os junto a vós na luz da vossa face.
        </Text>
        <Text style={styles.textoPovo}>Concedei-lhes, ó Senhor, a luz eterna!</Text>

        <Text style={styles.textoPadre}>
          Enfim, tende piedade de todos nós e dai-nos participar da vida eterna, com a Virgem Maria, Mãe de Deus, com São José, seu esposo, os Apóstolos e todos os Santos que neste mundo vos serviram, a fim de vos louvarmos e glorificarmos por Jesus Cristo, vosso Filho.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP/CC </Text>Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.
        </Text>

        <View style={styles.blocoAmem}>
          <Text style={styles.textoAmem}>AMÉM.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 20, paddingBottom: 50 },
  tituloHeader: { fontSize: 24, fontWeight: 'bold', color: '#5D4037', textAlign: 'center', marginTop: 10 },
  subtituloHeader: { fontSize: 14, fontStyle: 'italic', color: '#8D6E63', textAlign: 'center', marginBottom: 10 },
  divisor: { height: 2, backgroundColor: '#8D6E63', marginVertical: 15, width: '50%', alignSelf: 'center' },
  textoPadre: { fontSize: 17, color: '#212121', lineHeight: 26, marginBottom: 8 },
  textoPovo: { fontSize: 17, color: '#212121', fontWeight: 'bold', fontStyle: 'italic', lineHeight: 26, marginBottom: 15, paddingLeft: 10, borderLeftWidth: 3, borderLeftColor: '#E0E0E0' },
  rubrica: { color: '#D32F2F', fontWeight: 'bold' },
  rubricaBold: { color: '#D32F2F', fontWeight: '900' },
  instrucao: { fontSize: 14, color: '#757575', fontStyle: 'italic', marginVertical: 10 },
  blocoConsagracao: { backgroundColor: '#FFF9F9', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#FFEBEE', marginVertical: 20 },
  textoConsagracao: { fontSize: 18, fontWeight: 'bold', color: '#000', textAlign: 'center', lineHeight: 28 },
  blocoAmem: { marginTop: 30, alignItems: 'center', padding: 20 },
  textoAmem: { fontSize: 22, fontWeight: 'bold', color: '#D32F2F', letterSpacing: 2 },
});