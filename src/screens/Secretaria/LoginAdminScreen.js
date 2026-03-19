import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Alert, KeyboardAvoidingView, Platform, StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginAdminScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email.toLowerCase() === 'admin@saolucas.com' && senha === 'saolucas') {
      Alert.alert("Acesso Permitido", "Bem-vindo, Administrador!");
      navigation.navigate('Início', { 
        screen: 'AvisosSemanais', 
        params: { isAdmin: true } 
      });
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.content}
      >

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={40} color="#5D4037" />
          </View>
          
          <Text style={styles.titulo}>Área Restrita</Text>
          <Text style={styles.subtitulo}>Acesso apenas para a secretaria</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
              style={styles.input}
              placeholder="admin@email.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
              style={styles.input}
              placeholder="******"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.textoBotao}>ENTRAR NO PAINEL</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#8D6E63' 
  },
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 30, 
    padding: 25, 
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4.65 
  },
  iconContainer: { 
    alignSelf: 'center', 
    backgroundColor: '#F5F5F5', 
    padding: 20, 
    borderRadius: 50, 
    marginBottom: 15 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#5D4037', 
    textAlign: 'center' 
  },
  subtitulo: { 
    fontSize: 14, 
    color: '#8D6E63', 
    textAlign: 'center', 
    marginBottom: 25 
  },
  inputGroup: { 
    marginBottom: 20 
  },
  label: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#5D4037', 
    marginBottom: 8, 
    marginLeft: 5 
  },
  input: { 
    backgroundColor: '#F9F9F9', 
    padding: 15, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: '#E0E0E0', 
    fontSize: 16,
    color: '#333'
  },
  botao: { 
    backgroundColor: '#5D4037', 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 10,
    elevation: 2
  },
  textoBotao: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    letterSpacing: 1 
  }
});