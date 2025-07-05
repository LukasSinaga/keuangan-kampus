import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Keuangan Kampus</Text>
      <Button title="Anggaran" onPress={() => navigation.navigate('Anggaran')} />
      <Button title="Pengeluaran" onPress={() => navigation.navigate('Pengeluaran')} />
      <Button title="Pemasukan" onPress={() => navigation.navigate('Pemasukan')} />
      <Button title="Aset" onPress={() => navigation.navigate('Aset')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' }
});
