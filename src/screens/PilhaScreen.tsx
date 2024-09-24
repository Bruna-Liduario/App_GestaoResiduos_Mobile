import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PilhaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilhas e Baterias</Text>

      <Image
        source={require('../../assets/images/pilhas reciclagem.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="contain" // Faz a imagem ajustar-se ao contêiner
      />


      <Text style={styles.text}>
      A reciclagem de pilhas e baterias evita a liberação de metais pesados tóxicos no meio ambiente, como mercúrio, chumbo e cádmio
      </Text>
      <Text style={styles.text}>
      Como é feita:
      As pilhas e baterias são recolhidas em pontos de descarte e passam por processos de desmonte e separação de componentes. Os metais pesados são extraídos e reutilizados, enquanto outras partes são descartadas de forma segura.
      </Text>

      <Text>Benefícios</Text>
    <View>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Previne a contaminação do solo e da água com substâncias tóxicas</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Permite a reutilização de metais pesados.</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>• Reduz o impacto ambiental da mineração de novos materiais.</Text>
    </View>
      <Text style={styles.text}>
        Exemplos: Pilhas AA, baterias de celular, baterias de veículos elétricos.
      </Text>
      <Text style={styles.text}>
      Não reciclável, mas requer descarte especial.
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

export default PilhaScreen;