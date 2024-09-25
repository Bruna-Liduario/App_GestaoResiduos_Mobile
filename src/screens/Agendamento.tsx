import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { saveAgendamento } from '../config/agendamentoconfig';

export default function AgendamentoColeta() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
  
    const onChange = (event: any, date?: Date) => {
      setShowPicker(false);
      if (date) {
        setSelectedDate(date);
      }
    };

    const handleMaterialSelect = (material: string) => {
        setSelectedMaterial(material);
        setShowModal(false);
      };

      const handleSchedule = async () => {
        if (selectedDate && selectedMaterial) {
          const agendamento = {
            dataColeta: selectedDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
            material: selectedMaterial,
          };
      
          try {
            await saveAgendamento(agendamento);
            alert(`Coleta agendada para ${selectedDate.toLocaleDateString()} com material ${selectedMaterial}`);
          } catch (error) {
            console.error('Erro ao agendar coleta:', error);
            alert('Erro ao agendar coleta. Tente novamente.');
          }
        } else {
          alert('Selecione uma data e um material antes de agendar.');
        }
      };
    

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agendamento Coleta Seletiva</Text>
        <Image
          source={require('../../assets/images/Folha.jpg')} // Atualize o caminho da imagem se necessário
          style={styles.leafImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Selecione a data da coleta:</Text>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Escolha uma data'}
          </Text>
        </TouchableOpacity>
      </View>

      {showPicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <View style={styles.materialContainer}>
        <Text style={styles.label}>Selecione o material para coleta:</Text>
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.materialButton}>
          <Text style={styles.materialText}>
            {selectedMaterial ? selectedMaterial : 'Selecione um material'}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} animationType="slide"  presentationStyle="formSheet">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Selecione o material para coleta:</Text>
          <TouchableOpacity onPress={() => handleMaterialSelect('Papel')}>
            <Text style={styles.modalOption}>Papel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Plastico')}>
            <Text style={styles.modalOption}>Plástico</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Vidro')}>
            <Text style={styles.modalOption}>Vidro</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Metal')}>
            <Text style={styles.modalOption}>Metal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Pilhas')}>
            <Text style={styles.modalOption}>Pilhas e baterias</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Madeira')}>
            <Text style={styles.modalOption}>Madeira</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Hospitalar')}>
            <Text style={styles.modalOption}>Lixo hospitalar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Organico')}>
            <Text style={styles.modalOption}>Lixo Orgânico</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMaterialSelect('Lixo radioativo')}>
            <Text style={styles.modalOption}>Lixo radioativo</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text style={styles.modalCancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
          style={styles.scheduleButton}
          onPress={handleSchedule} // Chama a função quando o botão é pressionado
      >
        <Text style={styles.scheduleButtonText}>Agendar Coleta</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      leafImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
      },
      inputContainer: {
        width: '100%',
        marginBottom: 20,
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
        marginTop: 20,
      },
      dateButton: {
        padding: 10,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',


      },
      dateText: {
        fontSize: 16,
        color: '#333',
        
      },
      materialContainer: {
        width: '100%',
        marginBottom: 20,
      },
      materialButton: {
        padding: 10,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
      },
      materialText: {
        fontSize: 16,
        color: '#333',
      },
      modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalOption: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      modalCancel: {
        fontSize: 16,
        padding: 10,
        color: '#4CAF50',
      },
      scheduleButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
      },
      scheduleButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
});