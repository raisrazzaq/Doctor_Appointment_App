import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const Pending = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          icon={require('../../assets/back.png')}
          title={'Pending Appointments'}
        />
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../../assets/doctor.png')}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.DocName}>{'Doctor Martin'}</Text>
                  <Text style={styles.timig}>08:30 PM</Text>
                </View>
                <Text style={styles.status}>{'Pending'}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  itemView: {
    width: '95%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  DocName: {
    fontSize: 18,
    fontWeight: '700',
  },
  timig: {
    fontSize: 16,
    marginTop: 5,
  },
  status: {
    marginLeft: 80,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    padding: 5,
    color: 'orange',
  },
});

export default Pending;
