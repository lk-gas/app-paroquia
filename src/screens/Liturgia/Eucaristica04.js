import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function Eucaristica04() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.tituloHeader}>Oração Eucarística IV</Text>
        <Text style={styles.subtituloHeader}>(Inspirada na Tradição Alexandrina)</Text>
        <View style={styles.divisor} />

        {/* --- DIÁLOGO INICIAL --- */}
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> O Senhor esteja convosco.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> Ele está no meio de nós.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Corações ao alto.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> O nosso coração está em Deus.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Demos graças ao Senhor, nosso Deus.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> É nosso dever e nossa salvação.</Text>

        <Text style={styles.instrucao}>O sacerdote prossegue com o Prefácio próprio desta oração...</Text>
        <Text style={styles.textoPovo}>Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Na verdade, Pai, vós sois santo e magnificais as vossas obras com sabedoria e amor. Criastes o homem à vossa imagem e lhe confiastes todo o universo...
        </Text>

        <Text style={styles.textoPadre}>
          E, quando ele perdeu vossa amizade pela desobediência, não o abandonastes ao poder da morte, mas a todos socorrestes com bondade, para que os que vos procuram vos pudessem encontrar.
        </Text>

        <Text style={styles.textoPadre}>
          Pai santíssimo, amastes tanto o mundo, que nos enviastes vosso Filho único, quando os tempos se completaram, para ser o nosso Salvador.
        </Text>

        <Text style={styles.instrucao}>O sacerdote, de mãos estendidas sobre as oferendas:</Text>
        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Santificai, pois, pelo Espírito Santo, estas oferendas, a fim de que se tornem para nós o Corpo e <Text style={styles.rubrica}>✠</Text> o Sangue de nosso Senhor Jesus Cristo...
        </Text>
        <Text style={styles.textoPovo}>Santificai nossa oferenda, ó Senhor!</Text>

        {/* --- CONSAGRAÇÃO --- */}
        <View style={styles.blocoConsagracao}>
          <Text style={styles.instrucao}>Estando para chegar a hora em que ia ser glorificado...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE... FAZEI ISTO EM MEMÓRIA DE MIM.</Text>
        </View>

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Mistério da fé!</Text>
        <Text style={styles.textoPovo}>Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Celebrando, pois, agora, ó Pai, a memória da nossa redenção, anunciamos a morte de Cristo e sua descida entre os mortos, proclamamos a sua ressurreição e ascensão à vossa direita... Olhai, com bondade, para o sacrifício que vós mesmo preparastes para a vossa Igreja.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>1C </Text>Lembrai-vos, agora, ó Pai, daqueles por quem vos oferecemos este sacrifício: do vosso servo o Papa <Text style={styles.rubricaBold}>N.</Text>, do nosso Bispo <Text style={styles.rubricaBold}>N.</Text>, de todos os Bispos e do clero inteiro...
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>2C </Text>Lembrai-vos também dos que morreram na paz do vosso Cristo e de todos os mortos, cuja fé só vós conhecestes.
        </Text>
        <Text style={styles.textoPovo}>Concedei-lhes, ó Senhor, a luz eterna!</Text>

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