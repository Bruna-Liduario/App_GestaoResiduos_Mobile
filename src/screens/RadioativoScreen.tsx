import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RadioativoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixo Radioativo</Text>

      <Image
        source={require('../../assets/images/lixo radioativo.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
      São resíduos que contêm materiais radioativos, geralmente provenientes de atividades médicas, de pesquisa ou de usinas nucleares.
      </Text>
      <Text style={styles.text}>
      Como é feita:
      Esses materiais passam por um tratamento específico para serem isolados e armazenados em locais seguros por longos períodos, até que sua radioatividade se torne inofensiva.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Protege a saúde pública e o meio ambiente de materiais altamente perigosos.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Minimiza os riscos de contaminação radioativa a longo prazo.</Text>
    </View>
      <Text style={styles.text}>
        Exemplos: Resíduos de usinas nucleares, equipamentos médicos radiológicos.
      </Text>
      <Text style={styles.text}>
      Não reciclável, requer descarte seguro e especializado.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10
  }
});

export default RadioativoScreen;