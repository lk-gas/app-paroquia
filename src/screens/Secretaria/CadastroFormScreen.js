import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, 
  Alert, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, SafeAreaView 
} from 'react-native';
import { database } from '../../firebaseConfig';
import { ref, push } from 'firebase/database';
import emailjs from '@emailjs/react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroFormScreen({ route, navigation }) {
  const { tipo } = route.params;
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [carregando, setCarregando] = useState(false);

  const finalizarCadastro = async () => {
    if (!nome || !telefone || !endereco) {
      Alert.alert("Campos Obrigatórios", "Por favor, preencha Nome, Telefone e Endereço.");
      return;
    }

    setCarregando(true);

    try {
      // 1. Grava no Firebase
      const pasta = tipo === 'Dizimista' ? 'dizimistas' : tipo === 'Sócio Operário' ? 'socios' : 'outros';
      await push(ref(database, `cadastros/${pasta}`), {
        tipo,
        nome,
        telefone,
        email: email || 'Não informado',
        endereco,
        nascimento,
        data: new Date().toLocaleDateString('pt-BR')
      });

      // 2. Envia o e-mail via EmailJS (Mantendo suas chaves originais)
      await emailjs.send(
        'service_1jzlhyr',
        'template_838qifm',
        {
          to_email: 'lukinhasgaspar539@gmail.com',
          tipo_cadastro: tipo,
          nome_fiel: nome,
          telefone_fiel: telefone,
          email_fiel: email,
          endereco_fiel: endereco,
          nascimento_fiel: nascimento
        },
        {
          publicKey: 'yneKR4kbacfgV-UAt', 
        }
      );

      setCarregando(false);
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso!", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);

    } catch (error) {
      setCarregando(false);
      console.log("Erro detalhado:", error);
      Alert.alert("Cadastro Salvo", "Os dados foram salvos no sistema.");
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-add" size={30} color="#8D6E63" />
            </View>
            <Text style={styles.titulo}>Ficha de {tipo}</Text>
            <Text style={styles.subtitulo}>Preencha os dados abaixo para o cadastro paroquial</Text>
          </View>

          <View style={styles.cardForm}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome do fiel" placeholderTextColor="#BDBDBD" />

            <Text style={styles.label}>Telefone / WhatsApp</Text>
            <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholder="(00) 00000-0000" keyboardType="phone-pad" placeholderTextColor="#BDBDBD" />

            <Text style={styles.label}>E-mail (opcional)</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="email@exemplo.com" autoCapitalize="none" keyboardType="email-address" placeholderTextColor="#BDBDBD" />

            <Text style={styles.label}>Endereço Residencial</Text>
            <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder="Rua, nº, Bairro" placeholderTextColor="#BDBDBD" />

            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput style={styles.input} value={nascimento} onChangeText={setNascimento} placeholder="DD/MM/AAAA" keyboardType="numeric" placeholderTextColor="#BDBDBD" />

            <TouchableOpacity 
              style={[styles.botao, { backgroundColor: carregando ? '#A1887F' : '#8D6E63' }]} 
              onPress={finalizarCadastro}
              disabled={carregando}
              activeOpacity={0.8}
            >
              {carregando ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <View style={styles.btnContent}>
                  <Text style={styles.textoBotao}>FINALIZAR CADASTRO</Text>
                  <Ionicons name="checkmark-circle" size={20} color="#fff" style={{marginLeft: 10}} />
                </View>
              )}
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8F9FA' },
  container: { padding: 25, paddingBottom: 50 },
  header: { alignItems: 'center', marginBottom: 30 },
  iconContainer: { backgroundColor: '#EFEBE9', padding: 15, borderRadius: 20, marginBottom: 15 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#5D4037', textAlign: 'center' },
  subtitulo: { fontSize: 14, color: '#8D6E63', textAlign: 'center', marginTop: 5, paddingHorizontal: 20 },
  cardForm: { 
    backgroundColor: '#fff', 
    borderRadius: 25, 
    padding: 20, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 10 
  },
  label: { fontSize: 14, fontWeight: 'bold', color: '#5D4037', marginBottom: 8, marginLeft: 5 },
  input: { 
    backgroundColor: '#F5F5F5', 
    height: 55, 
    borderRadius: 15, 
    paddingHorizontal: 20, 
    marginBottom: 20, 
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  botao: { 
    height: 60, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10,
    elevation: 3
  },
  btnContent: { flexDirection: 'row', alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 }
});