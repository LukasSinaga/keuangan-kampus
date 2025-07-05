import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function AnggaranScreen() {
  const [data, setData] = useState([]);
  const [kegiatan, setKegiatan] = useState('');
  const [jumlah, setJumlah] = useState('');

  const tambahData = () => {
    if (kegiatan && jumlah) {
      setData([...data, { id: Date.now().toString(), kegiatan, jumlah }]);
      setKegiatan('');
      setJumlah('');
    } else {
      alert('Isi semua field!');
    }
  };

  const hapusData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD Anggaran</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Kegiatan"
        value={kegiatan}
        onChangeText={setKegiatan}
      />
      <TextInput
        style={styles.input}
        placeholder="Jumlah Dana"
        keyboardType="numeric"
        value={jumlah}
        onChangeText={setJumlah}
      />
      <Button title="Tambah" onPress={tambahData} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.kegiatan} - Rp{item.jumlah}</Text>
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
