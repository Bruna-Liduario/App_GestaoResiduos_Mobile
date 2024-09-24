import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MadeiraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Madeira</Text>

      <Image
        source={require('../../assets/images/madeira reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
      A reciclagem da madeira envolve o reaproveitamento de madeira usada para novos fins, como construção ou fabricação de móveis, evitando o corte de novas árvores.
      </Text>

      <Text style={styles.text}>
      Como é feita:
      A madeira é coletada, limpa, e cortada ou triturada para ser reutilizada em diferentes processos. Pode ser convertida em painéis de madeira, móveis ou até mesmo combustível para biomassa.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz o desmatamento e a extração de árvores.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Diminui a quantidade de resíduos em aterros.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Pode ser transformada em energia limpa (biomassa).</Text>
    </View>
    
      <Text style={styles.text}>
        Exemplos:
        Paletes, móveis antigos, restos de madeira de construção.
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

export default MadeiraScreen;