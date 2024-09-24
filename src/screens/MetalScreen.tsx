import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MetalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metal</Text>

      <Image
        source={require('../../assets/images/metal reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />

      <Text style={styles.text}>
      A reciclagem de metais transforma resíduos metálicos, como alumínio e aço, em novos produtos, economizando minérios e energia
      </Text>

      <Text style={styles.text}>
      Como é feita:
      Os metais são coletados, separados por tipo (alumínio, ferro, aço, cobre), limpos e derretidos em fornos de alta temperatura. O metal derretido é moldado em novos produtos
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Economiza minérios, como bauxita e ferro.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz a poluição e o consumo de energia no processo de extração de metais.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• O alumínio reciclado consome 95% menos energia do que a produção a partir do minério.</Text>
    </View>
    
      <Text style={styles.text}>
        Exemplos:
        Latas de alumínio, utensílios de cozinha, peças automotivas, eletrodomésticos.
      </Text>
      <Text style={styles.text}>
        Reciclável
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

export default MetalScreen;