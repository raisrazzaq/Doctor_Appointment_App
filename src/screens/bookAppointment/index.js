import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import CommonBtn from '../../components/CommonBtn';

const BookAppointment = () => {
  const [selectedSlots, setSelectedSlots] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);
  const Dates = [
    '10:00 - 12:00PM',
    '12:00 - 02:00PM',
    '02:00 - 04:00PM',
    '04:00 - 06:00PM',
    '06:00 - 08:00PM',
    '08:00 - 11:00PM',
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Header
            isIcon={require('../../assets/back.png')}
            title={'Book Appointment'}
          />
          <Image
            source={require('../../assets/doctor.png')}
            style={styles.DocImg}
          />
          <Text style={styles.docName}>Doctor Jack</Text>
          <Text style={styles.spelc}>Skin Doctor</Text>
          <Text style={styles.heading}>Available Slots</Text>
          <View>
            <FlatList
              data={Dates}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.timeSlots,
                      {borderColor: selectedSlots == index ? 'blue' : 'black'},
                    ]}
                    onPress={() => {
                      setSelectedSlots(index);
                    }}>
                    <Text
                      style={{
                        color: selectedSlots == index ? 'blue' : 'black',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Patients Name</Text>
          <TextInput placeholder="Enter Name" style={styles.InputName} />
          <Text style={styles.heading}>Select Gender</Text>
          <View style={styles.genderView}>
            <TouchableOpacity
              style={[
                styles.gender,
                {
                  borderWidth: 0.5,
                  borderColor: selectedGender == 0 ? 'blue' : 'black',
                },
              ]}
              onPress={() => {
                setSelectedGender(0);
              }}>
              <Image
                source={require('../../assets/male.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.gender,
                {
                  borderWidth: 0.5,
                  borderColor: selectedGender == 1 ? 'blue' : 'black',
                },
              ]}
              onPress={() => {
                setSelectedGender(1);
              }}>
              <Image
                source={require('../../assets/female.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <CommonBtn h={40} w={150} txt="Book now" status={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  DocImg: {
    height: 140,
    width: 140,
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
    borderRadius: 70,
  },
  docName: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  spelc: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 15,
  },
  timeSlots: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputName: {
    width: '90%',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  genderView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  gender: {
    borderRadius: 10,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookAppointment;
