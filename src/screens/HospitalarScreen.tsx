import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HospitalarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixo Hospitalar</Text>

      <Image
        source={require('../../assets/images/Lixo Hospitalar.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />

      <Text style={styles.text}>
      O lixo hospitalar inclui materiais usados em procedimentos médicos e laboratoriais, como seringas, agulhas, curativos e tecidos, que precisam de um tratamento especial.
      </Text>
      <Text style={styles.text}>
      Como é feita:
      O lixo hospitalar é separado, tratado e incinerado para eliminar riscos biológicos. Em alguns casos, passa por processos de autoclave ou desinfecção antes de ser descartado.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Garante a segurança pública e a saúde, evitando a contaminação por materiais perigosos.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz o risco de infecções e contaminação ambiental.</Text>
    </View>
      <Text style={styles.text}>
        Exemplos: Seringas, luvas, gazes, materiais cirúrgicos descartáveis.
      </Text>
      <Text style={styles.text}>
      Não reciclável, deve ser incinerado ou tratado de forma especial.
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

export default HospitalarScreen;