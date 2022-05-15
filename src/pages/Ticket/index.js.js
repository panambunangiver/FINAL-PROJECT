import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Ticket = ({navigation}) => {
  return (
    <View>
      <Header title="Ticket" onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.square}></View>
          <Text style={styles.text}>E-Tiket</Text>

          <View style={styles.wrapper}>
            <Text style={styles.text}>KM Saint Mary</Text>
            <Text style={styles.text1}>Kamis, 12 Mei 2022 04:00 WITA</Text>
            <Text style={styles.text1}>
              Pelabuhan Manado -- Pelabuhan Sanger
            </Text>
          </View>
          <View style={styles.wrapper1}>
            <Text style={styles.text2}>Nama : Giver Panambunan</Text>
            <Text style={styles.text2}>Jenis : Dewasa</Text>
            <Text style={styles.text2}>No tiket : 10123123201</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#EAEBED',
    width: 350,
    height: 450,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 320,
    height: 150,
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapper1: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 320,
    height: 150,
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'black',
  },
  square: {
    marginTop: 0,
    top: 10,
    left: 0,
    width: 320,
    height: 20,
    backgroundColor: '#5EBEF4',
    borderRadius: 0,
  },
  text2: {
    fontSize: 14,
    padding: 10,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
