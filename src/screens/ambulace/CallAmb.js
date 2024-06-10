import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import CommonBtn from '../../components/CommonBtn';

const CallAmb = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={'Call Ambulace'} />
        <TextInput placeholder="address" style={styles.addres} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>{'Call Now'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addres: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 30,
    padding: 12,
    borderRadius: 10,
  },
  txt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
});
export default CallAmb;
