import React from 'react';
import { 
  View, Text, StyleSheet, ScrollView, StatusBar, 
  TouchableOpacity, Linking, Platform, SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HorariosScreen() {
  const horarios = [
    { dia: 'Segunda a Sexta', hora: '06h30', obs: 'Missas Penitenciais - Matriz São Lucas', endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP' },
    { dia: 'Quinta-Feira', hora: '20h00', obs: "Missa do Fortalecimento - Matriz São Lucas", endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP'},
    { dia: 'Sábado', hora: '18h30', obs: 'Comunidade Santa Joana', endereco: 'Rua São Joaquim, 95 - Vila Merces, Carapicuíba - SP' },
    { dia: 'Sábado', hora: '20h00', obs: 'Comunidade Medalha Milagrosa', endereco: 'Rua Tibagi, 31 - Vila Bela, Carapicuíba - SP' },
    { dia: 'Domingo', hora: '07h30', obs: 'Missa Dominical - Matriz São Lucas', endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP' },
    { dia: 'Domingo', hora: '09h00', obs: 'Missa Dominical - Comunidade São Mateus', endereco: 'Avenida Jatobá, 441 - Vila Veloso, Carapicuíba - SP' },
    { dia: 'Domingo', hora: '10h30', obs: 'Missa Dominical - Matriz São Lucas', endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP' },
    { dia: 'Domingo', hora: '18h00', obs: 'Missa Dominical - Matriz São Lucas', endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP' },
    { dia: 'Todo dia 01', hora: '20h00', obs: 'Missa de Santa Teresinha - Matriz', endereco: 'Avenida Inocêncio Seráfico, 2450 - Vila Silva Ribeiro, Carapicuíba - SP' },
  ];

  const abrirNoGoogleMaps = (endereco) => {
    const enderecoCodificado = encodeURIComponent(endereco);
    // Correção das URLs para Android e iOS
    const url = Platform.select({
      ios: `maps:0,0?q=${enderecoCodificado}`,
      android: `geo:0,0?q=${enderecoCodificado}`
    });

    const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${enderecoCodificado}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          return Linking.openURL(fallbackUrl);
        }
      })
      .catch(() => {
        Linking.openURL(fallbackUrl);
      });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Santas Missas</Text>
          <Text style={styles.subtitulo}>Confira os horários e locais das celebrações</Text>
        </View>
        
        {horarios.map((item, index) => (
          <View key={index} style={styles.cardHorario}>
            <View style={styles.linhaPrincipal}>
              <View style={styles.boxHora}>
                <Text style={styles.horaTexto}>{item.hora}</Text>
                <Ionicons name="notifications-outline" size={14} color="#8D6E63" />
              </View>
              
              <View style={styles.info}>
                <Text style={styles.dia}>{item.dia}</Text>
                <Text style={styles.obs}>{item.obs}</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.botaoMapa} 
              onPress={() => abrirNoGoogleMaps(item.endereco)}
              activeOpacity={0.7}
            >
              <View style={styles.mapInfo}>
                <Ionicons name="location-outline" size={16} color="#4285F4" />
                <Text style={styles.enderecoResumido} numberOfLines={1}>
                  {item.endereco.split('-')[0]}
                </Text>
              </View>
              <Text style={styles.textoBotaoMapa}>COMO CHEGAR</Text>
            </TouchableOpacity>
          </View>
        ))}
        
        <Text style={styles.footer}>Programação sujeita a alterações em solenidades.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#8D6E63' },
  container: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 25, alignItems: 'center' },
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  subtitulo: { fontSize: 14, color: '#EFEBE9', opacity: 0.9, marginTop: 5 },
  cardHorario: { 
    backgroundColor: '#fff', 
    borderRadius: 22, 
    marginBottom: 16, 
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 }
  },
  linhaPrincipal: { flexDirection: 'row', padding: 18, alignItems: 'center' },
  boxHora: { 
    backgroundColor: '#F5F5F5', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  horaTexto: { fontSize: 18, fontWeight: 'bold', color: '#5D4037', marginBottom: 2 },
  info: { marginLeft: 15, flex: 1 },
  dia: { fontSize: 17, fontWeight: 'bold', color: '#3E2723' },
  obs: { fontSize: 13, color: '#795548', marginTop: 3, lineHeight: 18 },
  botaoMapa: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#F8F9FA',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0'
  },
  mapInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  enderecoResumido: { fontSize: 12, color: '#9E9E9E', marginLeft: 5, flex: 1 },
  textoBotaoMapa: { 
    color: '#4285F4', 
    fontWeight: 'bold', 
    fontSize: 12, 
    marginLeft: 10,
    letterSpacing: 0.5
  },
  footer: { textAlign: 'center', color: '#EFEBE9', marginTop: 15, fontSize: 12, opacity: 0.7, fontStyle: 'italic' }
});