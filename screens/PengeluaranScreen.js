import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function PengeluaranScreen() {
  const [data, setData] = useState([]);
  const [kategori, setKategori] = useState('');
  const [jumlah, setJumlah] = useState('');

  const tambahData = () => {
    if (kategori && jumlah) {
      setData([...data, { id: Date.now().toString(), kategori, jumlah }]);
      setKategori('');
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
      <Text style={styles.title}>CRUD Pengeluaran</Text>
      <TextInput
        style={styles.input}
        placeholder="Kategori Pengeluaran"
        value={kategori}
        onChangeText={setKategori}
      />
      <TextInput
        style={styles.input}
        placeholder="Jumlah"
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
            <Text>{item.kategori} - Rp{item.jumlah}</Text>
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
