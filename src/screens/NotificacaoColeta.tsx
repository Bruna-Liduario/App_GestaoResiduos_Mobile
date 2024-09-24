import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';

export default function NotificacaoColeta() {

  const [notifyCollection, setNotifyCollection] = useState(false);
  const [notifySchedule, setNotifySchedule] = useState(false);

  const handleNotifyCollection = () => {
    setNotifyCollection(!notifyCollection);
  };

  const handleNotifySchedule = () => {
    setNotifySchedule(!notifySchedule);
  };



  return (
<View style={styles.container}>
      <Text style={styles.title}>Notificação Coleta Seletiva</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Quero que o aplicativo me notifique em dias de coleta?</Text>
        <Switch
          style={styles.switch}
          value={notifyCollection}
          onValueChange={handleNotifyCollection}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Quero que o aplicativo me notifique nas datas dos meus agendamentos?</Text>
        <Switch
          style={styles.switch}
          value={notifySchedule}
          onValueChange={handleNotifySchedule}
        />
      </View>

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
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  scheduleContainer: {
    marginTop: 20,
  },
  scheduleText: {
    fontSize: 18,
    color: '#008000',
  },
  scheduleDate: {
    fontSize: 18,
    color: '#666',
  },
  scheduleTime: {
    fontSize: 18,
    color: '#666',
  },

});
