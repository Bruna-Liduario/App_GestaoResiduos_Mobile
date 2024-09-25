import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://192.168.1.138:9090/api'; // Substitua <YOUR_COMPUTER_IP> pelo IP do seu computador

export async function signUp(email: string, password: string, address: string) {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, address }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

export async function signIn(email: string, password: string): Promise<any> {
  try {
    const requestBody = JSON.stringify({ email, password });

    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      throw new Error(errorResponse || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login response data:', data); // Verifique o que está sendo retornado

    return data; // Retorna a resposta do login sem manipular tokens
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

