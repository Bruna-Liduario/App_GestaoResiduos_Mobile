const BASE_URL = 'http://192.168.100.144:9090/agendamento';

interface Agendamento {
  dataColeta: string; // ou Date, dependendo da sua preferência
  material: string;
  // outras propriedades se necessário
}

// Função para buscar todos os agendamentos
export async function fetchAgendamentos() {
  try {
    const response = await fetch(`${BASE_URL}/listar`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Retorna a lista de agendamentos
  } catch (error) {
    console.error('Error fetching agendamentos:', error);
    throw error;
  }
}

// Função para salvar um novo agendamento
export async function saveAgendamento(agendamento: Agendamento): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/salvar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(agendamento),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Retorna o agendamento salvo
  } catch (error) {
    console.error('Error saving agendamento:', error);
    throw error;
  }
}

// Função para buscar um agendamento por ID
export async function fetchAgendamentoById(id: string | number): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/buscar/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Retorna o agendamento encontrado
  } catch (error) {
    console.error('Error fetching agendamento by ID:', error);
    throw error;
  }
}

// Função para deletar um agendamento por ID
export async function deleteAgendamento(id: string | number): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/deletar/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response; // Não há corpo na resposta
  } catch (error) {
    console.error('Error deleting agendamento:', error);
    throw error;
  }
}
