import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert, Button } from 'react-native';
import { fetchAgendamentos, deleteAgendamento } from '../config/agendamentoconfig'; 
import { format } from 'date-fns';


const ListagemAgenda = () => {
  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); 

  // Função para buscar os agendamentos ao carregar o componente
  const loadAgendamentos = async () => {
    setLoading(true); 
    try {
      const data = await fetchAgendamentos();
      setAgendamentos(data);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar agendamentos. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir um agendamento
  const handleDelete = async (id: number) => {
    try {
      await deleteAgendamento(id);
      Alert.alert('Sucesso', 'Agendamento excluído com sucesso.');
      loadAgendamentos(); 
    } catch (error) {
      Alert.alert('Erro', 'Erro ao excluir agendamento. Tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    loadAgendamentos();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.row}>
    <Text style={styles.cell}>{format(new Date(item.dataColeta), 'dd/MM/yyyy')}</Text>
    <Text style={styles.cell}>{item.material}</Text>
    <Button title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
  </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando agendamentos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Agendamentos</Text>
      <FlatList
        data={agendamentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo mais suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Cor do texto do título
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#fff', // Fundo branco para as linhas
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 10, // Espaço entre as linhas
    elevation: 2, // Sombra para dar profundidade
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16, // Aumentar o tamanho da fonte
    color: '#555', // Cor do texto das células
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Cor de fundo igual ao container
  },
});


export default ListagemAgenda;
