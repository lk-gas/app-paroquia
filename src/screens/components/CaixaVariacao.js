import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CaixaVariacao({ titulo, children }) {
  const [aberto, setAberto] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setAberto(!aberto)}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Ionicons name={aberto ? "chevron-up" : "chevron-down"} size={18} color="#8D6E63" />
      </TouchableOpacity>
      {aberto && <View style={styles.corpo}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderAround: 1, borderColor: '#E0E0E0', borderWidth: 1, borderRadius: 8, marginVertical: 10, backgroundColor: '#FAFAFA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, alignItems: 'center' },
  titulo: { color: '#8D6E63', fontWeight: 'bold', fontSize: 14 },
  corpo: { padding: 12, borderTopWidth: 1, borderTopColor: '#EEE', backgroundColor: '#FFF' },
});