import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function Eucaristica05() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.tituloHeader}>Oração Eucarística V</Text>
        <Text style={styles.subtituloHeader}>(Congresso Eucarístico de Manaus)</Text>
        <View style={styles.divisor} />

        {/* --- DIÁLOGO INICIAL --- */}
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> O Senhor esteja convosco.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> Ele está no meio de nós.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Corações ao alto.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> O nosso coração está em Deus.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Demos graças ao Senhor, nosso Deus.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> É nosso dever e nossa salvação.</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>É justo e nos faz todos cantar, para louvar-vos, Pai de bondade. Pelos caminhos da vida nos guiais, com vossa mão segurais nossa mão. 
        </Text>
        <Text style={styles.textoPovo}>Vós sois o Pai de todos nós!</Text>

        <Text style={styles.textoPadre}>
          Vosso Filho Jesus Cristo nos mostrou o caminho. Ele é a mão que estendeis ao pecador. Ele é a palavra que nos salva e nos liberta.
        </Text>
        <Text style={styles.textoPovo}>Glória a vós, Senhor, que nos amastes!</Text>

        <Text style={styles.instrucao}>O sacerdote, de mãos estendidas sobre as oferendas:</Text>
        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Mandai vosso Espírito Santo sobre este pão e este vinho, a fim de que se tornem para nós o Corpo e <Text style={styles.rubrica}>✠</Text> o Sangue de Jesus Cristo, vosso Filho e Senhor nosso.
        </Text>
        <Text style={styles.textoPovo}>Mandai vosso Espírito Santo!</Text>

        {/* --- CONSAGRAÇÃO --- */}
        <View style={styles.blocoConsagracao}>
          <Text style={styles.instrucao}>Na noite em que ia ser entregue...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE... FAZEI ISTO EM MEMÓRIA DE MIM.</Text>
        </View>

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Mistério da fé!</Text>
        <Text style={styles.textoPovo}>Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Celebrando agora, ó Pai, a memória do vosso Filho, que morreu para nos salvar, nós vos oferecemos este pão que dá a vida e este cálice que é a nossa salvação.
        </Text>
        <Text style={styles.textoPovo}>Aceitai, ó Senhor, a nossa oferta!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>1C </Text>Olhai com amor para o vosso povo que oferece o Corpo e o Sangue do vosso Filho. Fortalecei a vossa Igreja com a luz do Evangelho e uni os cristãos num só corpo pelo laço do amor.
        </Text>
        <Text style={styles.textoPovo}>Caminhamos na estrada da paz!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>2C </Text>Lembrai-vos, ó Pai, do vosso servo o Papa <Text style={styles.rubricaBold}>N.</Text>, do nosso Bispo <Text style={styles.rubricaBold}>N.</Text>, e de todos os que servem o vosso povo.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>3C </Text>Lembrai-vos também dos nossos irmãos e irmãs que morreram na paz do vosso Cristo e de todos os mortos que só vós conhecestes: acolhei-os na luz da vossa presença.
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