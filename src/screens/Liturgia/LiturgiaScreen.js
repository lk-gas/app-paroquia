import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

// Adicionado { navigation } para evitar erros de navegação interna
export default function LiturgiaScreen({ navigation }) {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [liturgia, setLiturgia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const carregarLiturgia = async (date) => {
    setLoading(true);
    setErro(false);
    try {
      // API de Liturgia Diária
      const response = await axios.get(`https://liturgia.up.railway.app/?dia=${date.getDate()}&mes=${date.getMonth() + 1}`);
      setLiturgia(response.data);
    } catch (error) {
      console.error("Erro ao buscar liturgia", error);
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarLiturgia(dataSelecionada);
  }, [dataSelecionada]);

  const mudarDia = (dias) => {
    const novaData = new Date(dataSelecionada);
    novaData.setDate(dataSelecionada.getDate() + dias);
    setDataSelecionada(novaData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Seletor de Datas */}
      <View style={styles.headerDatas}>
        <TouchableOpacity onPress={() => mudarDia(-1)} style={styles.btnSeta}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.dataAtual}>
          <Text style={styles.textoDiaSemana}>
            {dataSelecionada.toLocaleDateString('pt-BR', { weekday: 'long' })}
          </Text>
          <Text style={styles.textoDataSuperior}>
            {dataSelecionada.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
          </Text>
        </View>

        <TouchableOpacity onPress={() => mudarDia(1)} style={styles.btnSeta}>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Buscando Liturgia...</Text>
        </View>
      ) : erro ? (
        <View style={styles.center}>
          <Text style={styles.loadingText}>Erro ao carregar os dados.</Text>
          <TouchableOpacity onPress={() => carregarLiturgia(dataSelecionada)} style={styles.btnRetry}>
            <Text style={{color: '#8D6E63', fontWeight: 'bold'}}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.badgeCor}>
               <Ionicons name="bookmark" size={14} color="#795548" />
               <Text style={styles.corLiturgica}> Cor: {liturgia?.cor || '---'}</Text>
            </View>
            
            <Text style={styles.celebracaoTitulo}>{liturgia?.liturgia}</Text>

            {/* Primeira Leitura */}
            <Text style={styles.sessaoTitulo}>1ª Leitura</Text>
            <Text style={styles.referencia}>{liturgia?.primeiraLeitura?.referencia}</Text>
            <Text style={styles.texto}>{liturgia?.primeiraLeitura?.texto}</Text>

            <View style={styles.divisor} />

            {/* Salmo */}
            <Text style={styles.sessaoTitulo}>Salmo Responsorial</Text>
            <Text style={styles.referencia}>{liturgia?.salmo?.referencia}</Text>
            <View style={styles.containerRefrao}>
               <Text style={styles.refrao}>R. {liturgia?.salmo?.refrao}</Text>
            </View>
            <Text style={styles.texto}>{liturgia?.salmo?.texto}</Text>

            <View style={styles.divisor} />

            {/* Segunda Leitura (Se existir) */}
            {liturgia?.segundaLeitura && (
              <>
                <Text style={styles.sessaoTitulo}>2ª Leitura</Text>
                <Text style={styles.referencia}>{liturgia?.segundaLeitura?.referencia}</Text>
                <Text style={styles.texto}>{liturgia?.segundaLeitura?.texto}</Text>
                <View style={styles.divisor} />
              </>
            )}

            {/* Evangelho */}
            <Text style={[styles.sessaoTitulo, {color: '#B71C1C'}]}>Evangelho</Text>
            <Text style={styles.referencia}>{liturgia?.evangelho?.referencia}</Text>
            <Text style={styles.textoEvangelho}>{liturgia?.evangelho?.texto}</Text>
          </View>
          
          <Text style={styles.copy}>© Missal Romano</Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8D6E63' },
  headerDatas: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 20,
  },
  btnSeta: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, borderRadius: 12 },
  dataAtual: { alignItems: 'center' },
  textoDiaSemana: { color: '#EFEBE9', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 },
  textoDataSuperior: { color: '#fff', fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' },
  scrollContent: { padding: 15, paddingBottom: 40 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { color: '#fff', marginTop: 10, fontWeight: '500' },
  btnRetry: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 15 },
  card: { backgroundColor: '#fff', borderRadius: 25, padding: 22, elevation: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  badgeCor: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', backgroundColor: '#F5F5F5', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  corLiturgica: { fontSize: 12, fontWeight: 'bold', color: '#795548', textTransform: 'capitalize' },
  celebracaoTitulo: { fontSize: 16, color: '#8D6E63', textAlign: 'center', marginVertical: 15, fontStyle: 'italic', borderBottomWidth: 1, borderBottomColor: '#EEE', paddingBottom: 10 },
  sessaoTitulo: { fontSize: 22, fontWeight: 'bold', color: '#5D4037', marginTop: 15 },
  referencia: { fontSize: 14, color: '#A1887F', fontWeight: '700', marginBottom: 12, textTransform: 'uppercase' },
  containerRefrao: { backgroundColor: '#FBE9E7', padding: 15, borderRadius: 12, marginVertical: 15, borderLeftWidth: 4, borderLeftColor: '#D32F2F' },
  refrao: { fontSize: 18, fontWeight: 'bold', color: '#D32F2F', fontStyle: 'italic' },
  texto: { fontSize: 17, color: '#333', lineHeight: 28, textAlign: 'justify' },
  textoEvangelho: { fontSize: 17, color: '#333', lineHeight: 28, textAlign: 'justify', fontWeight: '500' },
  divisor: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 25 },
  copy: { textAlign: 'center', color: '#EFEBE9', marginTop: 20, fontSize: 12, opacity: 0.7 }
});