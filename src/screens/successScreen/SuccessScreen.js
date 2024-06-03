import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

const SuccessScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/checked.png')}
          style={styles.img}
        />
        <Text style={styles.msg}>{'Your Appointment successfully booked'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  msg: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
  },
});
export default SuccessScreen;
