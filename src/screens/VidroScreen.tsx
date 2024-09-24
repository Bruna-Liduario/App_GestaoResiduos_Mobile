import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VidroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vidro</Text>

      <Image
        source={require('../../assets/images/vidro reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
      A reciclagem do vidro permite que ele seja reutilizado indefinidamente sem perder qualidade, economizando matéria-prima e energia.
      </Text>

      <Text style={styles.text}>
      Como é feita:
      Os vidros são separados por cor (verde, transparente e âmbar), triturados e limpos. Em seguida, são fundidos em altas temperaturas e moldados em novos produtos, como garrafas ou frascos.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Pode ser reciclado indefinidamente.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz a extração de areia e outros minerais para a fabricação de vidro.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Economiza energia, já que a reciclagem requer menos calor do que a fabricação de vidro novo.</Text>
    </View>
    
      <Text style={styles.text}>
        Exemplos:
        Garrafas de bebidas, potes de alimentos, frascos de perfume.
      </Text>
      <Text style={styles.text}>
        Reciclável.
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

export default VidroScreen;