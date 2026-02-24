import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, ActivityIndicator, 
  ImageBackground, StatusBar, ScrollView, Image, TouchableOpacity 
} from 'react-native';

// Mudança aqui: Importando do local correto
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { database } from '../../firebaseConfig'; 
import { ref, onValue } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';

const minhaImagem = require('../../../assets/icon_saolucas.png');

export default function HomeScreen({ navigation }) { 
  const [aviso, setAviso] = useState('Carregando...');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const avisoRef = ref(database, 'avisos/titulo');
    const listener = onValue(avisoRef, (snapshot) => {
      const dados = snapshot.val();
      setAviso(dados || "Nenhum aviso encontrado");
      setCarregando(false);
    });
    return () => listener();
  }, []);

  return (
    <View style={styles.flexContainer}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={minhaImagem} style={styles.background} resizeMode="cover">
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', 'rgba(78, 52, 46, 0.7)', '#4E342E']} 
          style={styles.overlay}
        >
          {/* SafeAreaView agora envolve o conteúdo para respeitar o notch */}
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
              
              <View style={styles.logoContainer}>
                <Image source={minhaImagem} style={styles.logoImagem} />
              </View>
              
              <Text style={styles.tituloIgreja}>Paróquia São Lucas Evangelista</Text>
              
              <View style={styles.cardAviso}>
                <View style={styles.headerAviso}>
                  <Ionicons name="notifications" size={20} color="#fff" />
                  <Text style={styles.label}>AVISO DO DIA</Text>
                </View>
                {carregando ? (
                  <ActivityIndicator color="#fff" size="large" />
                ) : (
                  <Text style={styles.textoAviso}>{aviso}</Text>
                )}
              </View>

              <TouchableOpacity style={styles.botaoLiturgia} onPress={() => navigation.navigate('MenuLiturgia')}>
                <Ionicons name="journal" size={24} color="#fff" />
                <Text style={styles.textoBotao}>LITURGIA</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoOracoes} onPress={() => navigation.navigate('Oracoes')}>
                <Ionicons name="book" size={24} color="#fff" />
                <Text style={styles.textoBotao}>ORAÇÕES</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoHorarios} onPress={() => navigation.navigate('Horarios')}>
                <Ionicons name="time" size={24} color="#fff" />
                <Text style={styles.textoBotao}>SANTAS MISSAS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoInscricoes} onPress={() => navigation.navigate('Inscricoes')}>
                <Ionicons name="list-circle" size={28} color="#fff" />
                <Text style={styles.textoBotao}>INSCRIÇÕES E CADASTROS</Text>
              </TouchableOpacity>

              <View style={styles.footerFrase}>
                <Text style={styles.versiculo}>"Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre!"</Text>
                <Text style={styles.referencia}>São Lucas - 01,42</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: { flex: 1, backgroundColor: '#4E342E' },
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, width: '100%' },
  container: { alignItems: 'center', padding: 20, paddingBottom: 40 },
  logoContainer: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#fff', overflow: 'hidden', marginBottom: 15, backgroundColor: '#fff', elevation: 8 },
  logoImagem: { width: '100%', height: '100%', resizeMode: 'cover' },
  tituloIgreja: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 30, textAlign: 'center', textShadowColor: 'rgba(0, 0, 0, 0.8)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 },
  cardAviso: { backgroundColor: 'rgba(0, 0, 0, 0.65)', padding: 25, borderRadius: 25, width: '100%', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)', marginBottom: 10 },
  headerAviso: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'center' },
  label: { fontSize: 14, color: '#fff', fontWeight: 'bold', marginLeft: 8 },
  textoAviso: { fontSize: 20, color: '#fff', textAlign: 'center', lineHeight: 30 },
  botaoLiturgia: { backgroundColor: '#795548', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 30, width: '100%', marginTop: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', elevation: 5 },
  botaoOracoes: { backgroundColor: '#8D6E63', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 30, width: '100%', marginTop: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', elevation: 5 },
  botaoHorarios: { backgroundColor: '#5D4037', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 30, width: '100%', marginTop: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', elevation: 5 },
  botaoInscricoes: { backgroundColor: '#00796B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 18, borderRadius: 30, width: '100%', marginTop: 30, borderWidth: 2, borderColor: '#fff', elevation: 8 },
  textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  footerFrase: { marginTop: 40, padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 15, width: '100%' },
  versiculo: { color: '#D7CCC8', fontSize: 16, textAlign: 'center', fontStyle: 'italic' },
  referencia: { color: '#fff', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
});