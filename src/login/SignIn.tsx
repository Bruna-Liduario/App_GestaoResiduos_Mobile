import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert  } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { RootStackParamList } from '../routes';
import { signIn } from '../config/api';
import { useNavigation } from '@react-navigation/native';

type SignInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignIn() {

    const navigation = useNavigation<SignInScreenProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {
        try {
          const response = await signIn(email, password);
          console.log('User signed up:', response);
          navigation.navigate('Drawer');
        } catch (error) {
          console.error('Error signing up:', error);
        }
      }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />
            
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText} >Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>                
            
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 3,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
  
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'

    },
  });