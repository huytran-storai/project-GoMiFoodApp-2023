import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Modal,Pressable} from 'react-native';
import React, {useState} from 'react';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        accessible={true}
        accessibilityLabel="Pizza"
        accessibilityLanguage="it-IT">
        <Text style={styles.titleStyles}>Start Building Project GoMiFood Today!</Text>
      </View>

      <View
        accessible={true}
        accessibilityLabel="Pizza"
        accessibilityLanguage="it-IT">
        <Text style={styles.titleStyles}>🍕🍕🍕🍕🍕🍕🍕</Text>
      </View>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Test nên cứ xóa sạch cái App.js để làm việc nha! ^^</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Let's Goooooo</Text>
      </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
