import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity,
  TextInput, Alert, ActivityIndicator, Image, StatusBar, Dimensions, Modal
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { database, storage } from '../../firebaseConfig';
import { ref, onValue, push, remove } from 'firebase/database';
import { ref as sRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function AvisosSemanaisScreen({ route }) {
  const { isAdmin } = route.params || { isAdmin: false };

  const [avisos, setAvisos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagensLocais, setImagensLocais] = useState([]);

  const [imagemZoom, setImagemZoom] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const avisosRef = ref(database, 'avisos_semanais');
    const unsubscribe = onValue(avisosRef, (snapshot) => {
      const dados = snapshot.val();
      const lista = dados ? Object.entries(dados).map(([id, val]) => ({ id, ...val })) : [];
      setAvisos(lista.reverse());
      setCarregando(false);
    });
    return () => unsubscribe();
  }, []);

  const escolherFotos = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!resultado.canceled) {
      const novasImagens = resultado.assets.map(asset => asset.uri);
      setImagensLocais([...imagensLocais, ...novasImagens]);
    }
  };

  const publicarAviso = async () => {
    if (!titulo && !descricao && imagensLocais.length === 0) {
      Alert.alert("Atenção", "Preencha as informações do aviso.");
      return;
    }
    setEnviando(true);
    let urlsFinais = [];
    let caminhosStorage = [];

    try {
      for (const uri of imagensLocais) {
        const nomeNoStorage = `avisos/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
        const storageRef = sRef(storage, nomeNoStorage);
        const response = await fetch(uri);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        urlsFinais.push(url);
        caminhosStorage.push(nomeNoStorage);
      }

      await push(ref(database, 'avisos_semanais'), {
        titulo, local, horario, texto: descricao,
        imagens: urlsFinais,
        caminhosFotos: caminhosStorage,
        data: new Date().toLocaleDateString('pt-BR'),
        criadoEm: Date.now()
      });

      setTitulo(''); setLocal(''); setHorario(''); setDescricao(''); setImagensLocais([]);
      Alert.alert("Sucesso", "Aviso publicado!");
    } catch (error) {
      Alert.alert("Erro", "Falha ao publicar.");
    } finally { setEnviando(false); }
  };

  const apagarAviso = (id, caminhosFotos) => {
    Alert.alert("Excluir", "Deseja remover este aviso?", [
      { text: "Cancelar", style: 'cancel' },
      { text: "Excluir", style: 'destructive', onPress: async () => {
          await remove(ref(database, `avisos_semanais/${id}`));
          if (caminhosFotos) {
            caminhosFotos.forEach(c => deleteObject(sRef(storage, c)).catch(() => {}));
          }
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
            <Ionicons name="close-circle" size={45} color="#fff" />
          </TouchableOpacity>
          {imagemZoom && <Image source={{ uri: imagemZoom }} style={styles.fullImage} resizeMode="contain" />}
        </View>
      </Modal>

      {isAdmin && (
        <View style={styles.adminBox}>
          <Text style={styles.adminTitle}>Postar Novo Aviso</Text>
          <TextInput style={styles.input} placeholder="Título" value={titulo} onChangeText={setTitulo} placeholderTextColor="#bbb" />
          <View style={styles.row}>
            <TextInput style={[styles.input, { flex: 1, marginRight: 5 }]} placeholder="📍 Local" value={local} onChangeText={setLocal} placeholderTextColor="#bbb" />
            <TextInput style={[styles.input, { flex: 1, marginLeft: 5 }]} placeholder="⏰ Horário" value={horario} onChangeText={setHorario} placeholderTextColor="#bbb" />
          </View>
          <TextInput style={[styles.input, { height: 45 }]} placeholder="Descrição rápida..." multiline value={descricao} onChangeText={setDescricao} placeholderTextColor="#bbb" />
          
          <View style={styles.adminActions}>
            <TouchableOpacity style={styles.btnFoto} onPress={escolherFotos}>
              <Ionicons name="camera" size={20} color="#5D4037" />
              <Text style={styles.btnFotoText}>Mídias ({imagensLocais.length})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPublicar} onPress={publicarAviso} disabled={enviando}>
              {enviando ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnPublicarText}>PUBLICAR AGORA</Text>}
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Mural da Paróquia</Text>

        {carregando ? (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
        ) : (
          avisos.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardHeaderPadding}>
                 <View style={styles.dataTag}>
                    <Text style={styles.cardData}>{item.data}</Text>
                 </View>
                 {isAdmin && (
                    <TouchableOpacity onPress={() => apagarAviso(item.id, item.caminhosFotos)}>
                        <Ionicons name="trash" size={20} color="#FF5252" />
                    </TouchableOpacity>
                 )}
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <View style={styles.infoRow}>
                    {item.local && <Text style={styles.badgeText}>📍 {item.local}</Text>}
                    {item.horario && <Text style={[styles.badgeText, {marginLeft: 10}]}>⏰ {item.horario}</Text>}
                </View>
                {item.texto && <Text style={styles.cardTexto}>{item.texto}</Text>}
              </View>
              
              {item.imagens && item.imagens.length > 0 && (
                <View style={styles.imageWrapper}>
                  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                    {item.imagens.map((imgUrl, idx) => (
                      <TouchableOpacity key={idx} activeOpacity={0.9} onPress={() => { setImagemZoom(imgUrl); setModalVisible(true); }}>
                        <Image source={{ uri: imgUrl }} style={styles.imageCard} />
                        <View style={styles.counter}>
                           <Text style={styles.counterText}>{idx + 1}/{item.imagens.length}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>
          ))
        )}
        <View style={{height: 40}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#8D6E63" },
  modalBackground: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  fullImage: { width: width, height: height * 0.85 },
  closeBtn: { position: 'absolute', top: 40, right: 20, zIndex: 10 },
  
  adminBox: { backgroundColor: "#fff", padding: 15, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 50, elevation: 15 },
  adminTitle: { fontSize: 16, fontWeight: "bold", color: "#5D4037", marginBottom: 10, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  input: { backgroundColor: "#F1F1F1", padding: 10, borderRadius: 12, marginBottom: 8, color: "#333", fontSize: 14 },
  adminActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  btnFoto: { flexDirection: 'row', backgroundColor: "#EFEBE9", padding: 12, borderRadius: 12, width: '40%', justifyContent: 'center', alignItems: 'center' },
  btnFotoText: { color: "#5D4037", fontWeight: "700", marginLeft: 5, fontSize: 12 },
  btnPublicar: { backgroundColor: "#5D4037", padding: 12, borderRadius: 12, width: '55%', alignItems: "center" },
  btnPublicarText: { color: "#fff", fontWeight: "bold", fontSize: 13 },

  scrollContent: { paddingHorizontal: 15, paddingTop: 20 },
  sectionTitle: { fontSize: 24, fontWeight: "800", color: "#fff", marginBottom: 20, letterSpacing: 0.5 },
  
  card: { backgroundColor: "#fff", borderRadius: 24, marginBottom: 25, overflow: 'hidden', elevation: 8, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10 },
  cardHeaderPadding: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingBottom: 5, alignItems: 'center' },
  dataTag: { backgroundColor: '#F5F5F5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  cardData: { fontSize: 11, color: "#888", fontWeight: '700' },
  
  cardContent: { paddingHorizontal: 20, paddingBottom: 15 },
  cardTitle: { fontSize: 22, fontWeight: "800", color: "#3E2723", marginBottom: 5 },
  infoRow: { flexDirection: 'row', marginBottom: 8 },
  badgeText: { fontSize: 13, color: "#8D6E63", fontWeight: '600' },
  cardTexto: { fontSize: 15, color: "#555", lineHeight: 22 },
  
  imageWrapper: { width: '100%', height: 320 }, // Aumentado para 320
  imageCard: { width: width - 30, height: 320 }, // Sangrando nas laterais do card
  counter: { position: 'absolute', top: 15, right: 15, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  counterText: { color: '#fff', fontSize: 11, fontWeight: 'bold' }
});