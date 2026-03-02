import React from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, Linking, 
  ScrollView, StatusBar, SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SecretariaScreen({ navigation }) {
  
  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      
      {/* ENGRENAGEM NO TOPO ESQUERDO (Exatamente onde a seta indica) */}
      <TouchableOpacity 
        style={styles.botaoEngrenagem} 
        onPress={() => navigation.navigate('Início', { screen: 'LoginAdmin' })}
        activeOpacity={0.6}
      >
        <Ionicons name="settings-outline" size={26} color="rgba(255,255,255,0.4)" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.titulo}>Secretaria</Text>
          <Text style={styles.subtitulo}>Paróquia São Lucas Evangelista</Text>
          <View style={styles.divisor} />
        </View>

        <View style={styles.secaoBotoes}>
          <TouchableOpacity 
            style={[styles.botao, { backgroundColor: '#25D366' }]} 
            onPress={() => abrirLink('https://wa.me/551141881827')} 
            activeOpacity={0.8}
          >
            <Ionicons name="logo-whatsapp" size={24} color="#fff" />
            <Text style={styles.textoBotao}>Fale conosco no WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, { backgroundColor: '#4285F4' }]} 
            onPress={() => abrirLink('https://www.google.com/maps/search/?api=1&query=Paróquia+São+Lucas+Evangelista+Carapicuíba')} 
            activeOpacity={0.8}
          >
            <Ionicons name="location" size={24} color="#fff" />
            <Text style={styles.textoBotao}>Como Chegar?</Text>
          </TouchableOpacity>

          <Text style={styles.labelRedes}>Nossas Redes Sociais</Text>

          <View style={styles.gridRedes}>
            <TouchableOpacity style={[styles.botaoRede, { backgroundColor: '#1877F2' }]} onPress={() => abrirLink('https://www.facebook.com/paroquiasaolucas')}>
              <Ionicons name="logo-facebook" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botaoRede, { backgroundColor: '#E1306C' }]} onPress={() => abrirLink('https://instagram.com/paroquiasaolucas')}>
              <Ionicons name="logo-instagram" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botaoRede, { backgroundColor: '#FF0000' }]} onPress={() => abrirLink('https://www.youtube.com/@paroquiasaolucasevangelista')}>
              <Ionicons name="logo-youtube" size={24} color="#fff" />
            </TouchableOpacity>
            
          </View>
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.cardHeader}>
            <Ionicons name="time-outline" size={20} color="#8D6E63" />
            <Text style={styles.infoTitulo}>Horário de Atendimento</Text>
          </View>
          <View style={styles.infoLinha}>
            <Text style={styles.infoDia}>Segunda a Sexta:</Text>
            <Text style={styles.infoHora}>08h às 17h</Text>
          </View>
          <View style={styles.infoLinha}>
            <Text style={styles.infoDia}>Sábado:</Text>
            <Text style={styles.infoHora}>08h às 12h</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textoEnderecoBold}>Diocese de Osasco</Text>
          <Text style={styles.textoEndereco}>Av. Inocêncio Seráfico, nº 2450</Text> 
          <Text style={styles.textoEndereco}>Carapicuíba - SP</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#8D6E63' },
  botaoEngrenagem: {
    position: 'absolute',
    top: 50, // Ajuste dependendo do entalhe (notch) do celular
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  container: { padding: 25, alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 30, marginTop: 40 },
  titulo: { fontSize: 34, fontWeight: 'bold', color: '#fff' },
  subtitulo: { fontSize: 16, color: '#EFEBE9', opacity: 0.9, marginTop: 5 },
  divisor: { height: 3, width: 50, backgroundColor: '#EFEBE9', marginTop: 15, borderRadius: 2 },
  secaoBotoes: { width: '100%', alignItems: 'center' },
  labelRedes: { color: '#EFEBE9', fontSize: 14, fontWeight: '600', marginTop: 20, marginBottom: 15, textTransform: 'uppercase', letterSpacing: 1 },
  botao: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 18, borderRadius: 20, marginBottom: 12, elevation: 5 },
  gridRedes: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 15 },
  botaoRede: { width: '30%', height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  textoBotao: { color: '#fff', fontSize: 17, fontWeight: 'bold', marginLeft: 12 },
  cardInfo: { marginTop: 30, padding: 20, backgroundColor: '#fff', borderRadius: 25, width: '100%', elevation: 4 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  infoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#5D4037', marginLeft: 8 },
  infoLinha: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, paddingHorizontal: 5 },
  infoDia: { fontSize: 15, color: '#8D6E63', fontWeight: '500' },
  infoHora: { fontSize: 15, color: '#3E2723', fontWeight: 'bold' },
  footer: { marginTop: 40, marginBottom: 20, alignItems: 'center', opacity: 0.8 },
  textoEnderecoBold: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  textoEndereco: { color: '#EFEBE9', fontSize: 14 },
});