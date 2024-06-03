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
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import CommonBtn from '../../components/CommonBtn';

let DaysList = [];

const BookAppointment = ({navigation}) => {
  const [selectedSlots, setSelectedSlots] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [slots, setSlots] = useState([
    {time: '10:00 - 12:00PM', selected: false},
    {time: '12:00 - 02:00PM', selected: false},
    {time: '02:00 - 04:00PM', selected: false},
    {time: '04:00 - 06:00PM', selected: false},
    {time: '06:00 - 08:00PM', selected: false},
    {time: '08:00 - 11:00PM', selected: false},
  ]);
  const [days, setDays] = useState([]);
  useEffect(() => {
    DaysList = [];
    const month = new Date().getMonth() + 1;
    for (let i = 1; i <= getDays(month); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);

  const getDays = month => {
    let days = 0;
    switch (month) {
      case 1:
        days = 31;
        break;
      case 2:
        days = 28;
        break;
      case 3:
        days = 31;
        break;
      case 4:
        days = 30;
        break;
      case 5:
        days = 31;
        break;
      case 6:
        days = 30;
        break;
      case 7:
        days = 31;
        break;
      case 8:
        days = 31;
        break;
      case 9:
        days = 30;
        break;
      case 10:
        days = 31;
        break;
      case 11:
        days = 30;
        break;
      case 12:
        days = 31;
        break;
      default:
        days = 31;
        break;
    }
    return days;
  };

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
          <Text style={styles.heading}>Select Dates</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DaysList}
              keyExtractor={({item, index}) => index}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.SelectDates,
                      {
                        backgroundColor:
                          selectedDay == index ? 'blue' : 'white',
                        borderWidth: selectedDay == index ? 0 : 1,
                      },
                    ]}
                    onPress={() => {
                      if (item.day < new Date().getDate()) {
                      } else {
                        setSelectedDay(index);
                      }
                    }}>
                    <Text
                      style={[
                        styles.DatesTexT,
                        {
                          color: selectedDay == index ? 'white' : 'black',
                        },
                      ]}>
                      {item.day}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.day.toString()}
            />
          </View>
          <Text style={styles.heading}>Available Slots</Text>
          <View>
            <FlatList
              data={slots}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.timeSlots,
                      {borderColor: selectedSlots == index ? 'blue' : 'black'},
                    ]}
                    onPress={() => {
                      const updatedSlots = slots.map((slot, i) =>
                        i === index
                          ? {...slot, selected: !slot.selected}
                          : slot,
                      );
                      setSlots(updatedSlots);
                      setSelectedSlots(index);
                    }}>
                    <Text
                      style={{
                        color: selectedSlots == index ? 'blue' : 'black',
                      }}>
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.time}
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
          <CommonBtn
            h={40}
            w={150}
            txt="Book now"
            status={true}
            onClick={() => {
              navigation.navigate('SuccessScreen');
            }}
          />
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
  SelectDates: {
    height: 50,
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'gray',
  },
  DatesTexT: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default BookAppointment;
