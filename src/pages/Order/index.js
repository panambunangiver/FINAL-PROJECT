import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import Button1 from '../../components/atoms/Button1';

const Order = ({navigation}) => {
  return (
    <View>
      <Header title="Order" onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.text}>KM SaintMary</Text>
          <Gap height={20} />
          <Text>Info Keberangkatan</Text>
          <Text>Senin - Kamis</Text>
          <Text>Keberangkatan : 04: 00 WITA</Text>
          <Gap height={20} />
          <Text style={styles.text}>Rp. 190.000,00</Text>
        </View>
      </View>
      <Gap height={500} />
      <View style={styles.button}>
        <Button1 title="Pesan" onPress={() => navigation.navigate('Ticket')} />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  all: {
    flex: 1,
    alignItems: 'center',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    top: 100,
    width: 320,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEBED',
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
  button: {
    alignItems: 'center',
  },
});
