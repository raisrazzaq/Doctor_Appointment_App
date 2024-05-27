import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CommonBtn = ({w, h, txt, onClick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{alignItems: 'center'}}>
      {status ? (
        <LinearGradient
          colors={['#009FFD', '#2A2A72']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <Text style={styles.txt}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#8e8e8e', '#8e8e8e']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            opacity: 0.5,
          }}>
          <Text style={styles.txt}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CommonBtn;
