import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = ({title, isIcon}) => {
  return (
    <View style={styles.header}>
      {isIcon ? (
        <TouchableOpacity style={styles.backButton} underlayColor="green">
          <Image
            source={require('../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={[styles.title, {marginLeft: isIcon ? 20 : 0}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  backButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Header;
