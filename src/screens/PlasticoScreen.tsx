import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PlasticoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plástico</Text>

      <Image
        source={require('../../assets/images/plastico reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />

      <Text style={styles.text}>
        A reciclagem do plástico transforma resíduos plásticos em novos produtos, reduzindo o uso de petróleo e outros recursos não renováveis.
      </Text>

      <Text style={styles.text}>
      Como é feita:
      Os plásticos são separados por tipo (PET, PVC, PEAD, etc.), limpos, triturados em pequenos 
      grânulos e fundidos para formar novos produtos. Alguns plásticos passam por processos de moldagem para se tornarem novos itens.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz a poluição ambiental, especialmente em oceanos.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Economiza petróleo, matéria-prima para a produção de plásticos.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Diminui a necessidade de aterros sanitários.</Text>
    </View>
    
      <Text style={styles.text}>
        Exemplos:
        Garrafas PET, sacolas plásticas, embalagens de produtos de limpeza, brinquedos.
      </Text>
      <Text style={styles.text}>
        Reciclável, dependendo do tipo de plástico
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

export default PlasticoScreen;