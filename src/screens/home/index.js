import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../../components/CommonBtn';

const HomeScreen = ({navigation}) => {
  const categories = [1, 1, 1, 1, 1, 1, 1];
  const DocItem = [1, 1, 1, 1, 1, 1];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Header title="DoctorApp" isIcon={false} />
          <Image
            source={require('../../assets/DoctorImage.jpeg')}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Category</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#009FFD', '#2A2A72']}
                      style={styles.linearGradient}>
                      <Text style={styles.catName}>
                        {'Category ' + (index + 1)}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <FlatList
              numColumns={2}
              data={DocItem}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.DoctItem}>
                    <Image
                      source={require('../../assets/doctor.png')}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docExpertise}>Skin Specialist</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index == 0 ? 'green' : 'red',
                          opacity: index == 0 ? 1 : 0.5,
                        },
                      ]}>
                      {index == 0 ? 'Available' : 'Busy'}
                    </Text>
                    <CommonBtn
                      w={150}
                      h={40}
                      status={index / 2 == 0 ? true : false}
                      txt={'Book Appointmet'}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate('BookAppointment');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  DoctItem: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docExpertise: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    marginTop: 5,
  },
});

export default HomeScreen;
