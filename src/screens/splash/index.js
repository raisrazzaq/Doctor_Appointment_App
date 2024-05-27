import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>DoctorApp</Text>
      <Image source={require('../../assets/DrImage.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    gap: 20,
  },
  txt: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: 200,
  },
});

export default SplashScreen;
