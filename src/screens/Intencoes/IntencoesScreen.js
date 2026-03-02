import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Linking 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Importando a configuração do Firebase que você já tem
import { database } from '../../firebaseConfig'; 
import { ref, push, set } from 'firebase/database';

export default function IntencoesScreen() {
  const [nome, setNome] = useState('');
  const [motivo, setMotivo] = useState('');
  const [tipo, setTipo] = useState('Selecione uma opção'); 
  const [observacao, setObservacao] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  const opcoes = [
    '7º Dia', '30º Dia', '1 Ano', 'Falecimento', 
    'Graça Alcançada', 'Saúde', 'Aniversário', 'Outros'
  ];

  const selecionarOpcao = (item) => {
    setTipo(item);
    setMenuAberto(false);
  };

  const limparCampos = () => {
    setNome('');
    setMotivo('');
    setTipo('Selecione uma opção');
    setObservacao('');
  };

  const enviarTudo = async () => {
    if (!nome.trim() || !motivo.trim() || tipo === 'Selecione uma opção') {
      Alert.alert("Campos incompletos", "Por favor, preencha o Nome, Motivo e selecione o Tipo.");
      return;
    }

    try {
      // 1. SALVAR NO FIREBASE
      const intencoesRef = ref(database, 'intencoes_missa');
      const novaIntencaoRef = push(intencoesRef);
      
      await set(novaIntencaoRef, {
        nome: nome,
        motivo: motivo,
        tipo: tipo,
        observacao: observacao,
        data_envio: new Date().toLocaleString('pt-BR'),
        timestamp: new Date().getTime()
      });

      // 2. PREPARAR LINK WHATSAPP (Usando o padrão da sua secretaria)
      const numeroSecretaria = '551141881827'; 
      const mensagem = `*Nova Intenção de Missa*\n\n*Nome:* ${nome}\n*Motivo:* ${motivo}\n*Tipo:* ${tipo}\n*Obs:* ${observacao || 'Nenhuma'}`;
      const url = `https://wa.me/${numeroSecretaria}?text=${encodeURIComponent(mensagem)}`;

      Alert.alert(
        "Tudo Certo!",
        "Intenção registrada. Deseja enviar o comprovante para o WhatsApp da Secretaria?",
        [
          { text: "Apenas Salvar", onPress: () => limparCampos(), style: "cancel" },
          { text: "Enviar WhatsApp", onPress: () => {
              Linking.openURL(url);
              limparCampos();
          }}
        ]
      );

    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar. Verifique sua internet.");
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <View style={styles.iconCircle}>
              <Ionicons name="heart" size={40} color="#8D6E63" />
            </View>
            <Text style={styles.titulo}>Intenções da Missa</Text>
            <Text style={styles.subtitulo}>Apresente suas preces ao Senhor</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Nome da Pessoa:</Text>
            <TextInput style={styles.input} placeholder="Ex: João da Silva" value={nome} onChangeText={setNome} placeholderTextColor="#A1887F" />

            <Text style={styles.label}>Motivo / Intenção:</Text>
            <TextInput style={styles.input} placeholder="Ex: Pela saúde, Em memória de..." value={motivo} onChangeText={setMotivo} placeholderTextColor="#A1887F" />

            <Text style={styles.label}>Tipo de Celebração:</Text>
            <TouchableOpacity 
              style={[styles.selector, menuAberto && styles.selectorAberto]} 
              onPress={() => setMenuAberto(!menuAberto)}
            >
              <Text style={[styles.selectorTexto, tipo !== 'Selecione uma opção' && {color: '#3E2723'}]}>{tipo}</Text>
              <Ionicons name={menuAberto ? "chevron-up" : "chevron-down"} size={20} color="#8D6E63" />
            </TouchableOpacity>

            {menuAberto && (
              <View style={styles.listaOpcoes}>
                {opcoes.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.opcaoItem} onPress={() => selecionarOpcao(item)}>
                    <Text style={styles.opcaoTexto}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <Text style={styles.label}>Observações (Opcional):</Text>
            <TextInput style={[styles.input, styles.textArea]} placeholder="Ex: Missa das 10h..." multiline value={observacao} onChangeText={setObservacao} placeholderTextColor="#A1887F" />

            <TouchableOpacity style={styles.btnEnviar} onPress={enviarTudo}>
              <Ionicons name="logo-whatsapp" size={20} color="#fff" style={{marginRight: 10}} />
              <Text style={styles.btnTxt}>ENVIAR AO ALTAR</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8D6E63' },
  scrollContent: { padding: 20 },
  header: { alignItems: 'center', marginBottom: 25 },
  iconCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', elevation: 5 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 15 },
  subtitulo: { fontSize: 14, color: '#EFEBE9', opacity: 0.9 },
  card: { backgroundColor: '#fff', borderRadius: 25, padding: 20, elevation: 5 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#5D4037', marginBottom: 6, marginTop: 15 },
  input: { backgroundColor: '#F5F5F5', borderRadius: 12, padding: 14, fontSize: 16, color: '#3E2723', borderWidth: 1, borderColor: '#E0E0E0' },
  textArea: { height: 70, textAlignVertical: 'top' },
  selector: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#E0E0E0' },
  selectorAberto: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderColor: '#8D6E63' },
  selectorTexto: { fontSize: 16, color: '#A1887F' },
  listaOpcoes: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#8D6E63', borderTopWidth: 0, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, overflow: 'hidden' },
  opcaoItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  opcaoTexto: { fontSize: 16, color: '#5D4037' },
  btnEnviar: { backgroundColor: '#25D366', padding: 18, borderRadius: 15, marginTop: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', elevation: 3 },
  btnTxt: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});