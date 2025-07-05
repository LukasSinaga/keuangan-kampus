import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function AsetScreen() {
  const [data, setData] = useState([]);
  const [namaAset, setNamaAset] = useState('');
  const [nilai, setNilai] = useState('');

  const tambahData = () => {
    if (namaAset && nilai) {
      setData([...data, { id: Date.now().toString(), namaAset, nilai }]);
      setNamaAset('');
      setNilai('');
    } else {
      alert('Isi semua field!');
    }
  };

  const hapusData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD Aset</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Aset"
        value={namaAset}
        onChangeText={setNamaAset}
      />
      <TextInput
        style={styles.input}
        placeholder="Nilai Aset"
        keyboardType="numeric"
        value={nilai}
        onChangeText={setNilai}
      />
      <Button title="Tambah" onPress={tambahData} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.namaAset} - Rp{item.nilai}</Text>
            <Button title="Hapus" onPress={() => hapusData(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 5 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, padding: 10, backgroundColor: '#eee', borderRadius: 5 },
});
