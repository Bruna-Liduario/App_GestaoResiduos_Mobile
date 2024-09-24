import React from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';

const PapelScreen = () => {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Papel</Text>

      <Image
        source={require('../../assets/images/papel reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
        A reciclagem do papel envolve a reutilização de papéis usados para produzir novos produtos de papel. Isso ajuda a economizar árvores e água.
      </Text>
      <Text style={styles.text}>
        Como é feita:
        O papel coletado é separado por tipo, depois é triturado e misturado com água para formar uma polpa. 
        Impurezas, como grampos e plásticos, são removidas, e a polpa é refinada, branqueada e transformada em novos produtos de papel.
      </Text>

      <Text>Benefícios</Text>
      <View>
        <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz o desmatamento</Text>
        <Text style={{ fontSize: 16, marginLeft: 10 }}>• Economiza água e energia no processo de fabricação.</Text>
        <Text style={{ fontSize: 16, marginLeft: 10 }}>• Diminui a quantidade de lixo nos aterros.</Text>
      </View>
      <Text style={styles.text}>
        Exemplos: Jornais, caixas de papelão, revistas, folhas de papel A4.
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});


export default PapelScreen;