import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const OrganicoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixo Orgânico</Text>

      <Image
        source={require('../../assets/images/lixo organico.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
      O lixo orgânico é composto por restos de alimentos e outros materiais biodegradáveis, que podem ser convertidos em adubo através da compostagem.
      </Text>
      <Text style={styles.text}>
      Como é feita:
      Os resíduos orgânicos são separados do lixo comum e colocados em composteiras, onde passam por um processo natural de decomposição, resultando em adubo rico em nutrientes para plantas.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz a quantidade de lixo nos aterros sanitários.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Produz adubo natural para uso na agricultura e jardinagem.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Diminui as emissões de gases de efeito estufa.</Text>
    </View>
      <Text style={styles.text}>
        Exemplos: Restos de comida, cascas de frutas, folhas, podas de árvores.
      </Text>
      <Text style={styles.text}>
      Não reciclável, mas compostável.
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

export default OrganicoScreen;