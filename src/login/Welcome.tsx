import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/index';

type WelcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
    const navigation = useNavigation<WelcomeScreenProp>();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                source={require('../../assets/images/Folha.jpg')}
                style={{ width: '70%'}}
                resizeMode='contain'/>                
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Se informe, Acompanhe e Ajude o Meio Ambiente</Text>
                <Text style={styles.text}> Faça Login para Começar</Text>
                
                <TouchableOpacity
                 style={styles.button}
                 onPress={() => navigation.navigate('SignIn')}
                >
                
                <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1, 
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12

    },
    text:{
        color: '#151414',
    }, 
    button:{
        position: 'absolute',
        backgroundColor: '#196a63',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})