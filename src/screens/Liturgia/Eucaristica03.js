import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function Eucaristica03() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.tituloHeader}>Oração Eucarística III</Text>
        <Text style={styles.subtituloHeader}>(Para os Domingos e Festas)</Text>
        <View style={styles.divisor} />

        {/* --- DIÁLOGO INICIAL --- */}
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> O Senhor esteja convosco.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> Ele está no meio de nós.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Corações ao alto.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> O nosso coração está em Deus.</Text>
        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Demos graças ao Senhor, nosso Deus.</Text>
        <Text style={styles.textoPovo}><Text style={styles.rubrica}>R.</Text> É nosso dever e nossa salvação.</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CP </Text>Na verdade, vós sois santo, ó Deus do universo, e é justo que todas as vossas criaturas vos glorifiquem, pois, por Jesus Cristo... santificais e vivificais todas as coisas e não cessais de reunir o vosso povo...
        </Text>
        <Text style={styles.textoPovo}>Santo, Santo, Santo, Senhor Deus do universo!</Text>

        <Text style={styles.instrucao}>O sacerdote, de mãos estendidas sobre as oferendas:</Text>
        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Nós vos suplicamos: santificai pelo Espírito Santo as oferendas que vos apresentamos para serem consagradas, a fim de que se tornem o Corpo e <Text style={styles.rubrica}>✠</Text> o Sangue de vosso Filho, nosso Senhor Jesus Cristo...
        </Text>
        <Text style={styles.textoPovo}>Santificai nossa oferenda, ó Senhor!</Text>

        {/* --- CONSAGRAÇÃO --- */}
        <View style={styles.blocoConsagracao}>
          <Text style={styles.instrucao}>Na noite em que ia ser entregue, ele tomou o pão...</Text>
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.textoConsagracao}>TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE... FAZEI ISTO EM MEMÓRIA DE MIM.</Text>
        </View>

        <Text style={styles.textoPadre}><Text style={styles.rubrica}>V.</Text> Mistério da fé!</Text>
        <Text style={styles.textoPovo}>Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>CC </Text>Celebrando agora, ó Pai, a memória da paixão redentora do vosso Filho... nós vos oferecemos, em ação de graças, este sacrifício vivo e santo.
        </Text>
        <Text style={styles.textoPovo}>Recebei, ó Senhor, a nossa oferta!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>1C </Text>Que ele faça de nós uma oferenda perfeita para alcançarmos a vida eterna com os vossos eleitos: a Virgem Maria, Mãe de Deus, São José, seu esposo, os vossos Apóstolos e Mártires... e todos os Santos.
        </Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>2C </Text>Reconciliai convosco, ó Pai, o mundo inteiro, pela força deste sacrifício da redenção. Dai à vossa Igreja que caminha no mundo a fé e a caridade, com o vosso servo o Papa <Text style={styles.rubricaBold}>N.</Text>, o nosso Bispo <Text style={styles.rubricaBold}>N.</Text> e todo o povo que conquistastes.
        </Text>

        <Text style={styles.textoPadre}>
          Atendei as preces desta família que reunistes em vossa presença. Reuni em vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.
        </Text>
        <Text style={styles.textoPovo}>Ouvi, ó Pai, a nossa prece!</Text>

        <Text style={styles.textoPadre}>
          <Text style={styles.rubrica}>3C </Text>Acolhei com bondade no vosso reino os nossos irmãos e irmãs que partiram desta vida... Lá esperamos desfrutar eternamente da vossa glória, por Cristo, nosso Senhor.
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