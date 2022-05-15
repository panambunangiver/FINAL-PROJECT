import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconPadaPesanan} from '../../assets';
import {ButtonIcon, Gap} from '../../components';
import Button1 from '../../components/atoms/Button1';

const Pesanan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IconPadaPesanan />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ButtonIcon
            title="Km Saint Mary"
            onPress={() => navigation.navigate('Order')}
          />
          <Text>Manado - Tahuna</Text>
          <Text>Rp. 190.000,00</Text>
        </View>
        <View style={styles.wrapper}>
          <ButtonIcon
            title="Km Permata Obi"
            onPress={() => navigation.navigate('Order')}
          />
          <Text>Manado - Ternate</Text>
          <Text>Rp. 375.000,00</Text>
        </View>
        <View style={styles.wrapper}>
          <ButtonIcon title="Km Barcelona" />
          <Text>Manado - Talaud</Text>
          <Text>Rp. 150.000,00</Text>
        </View>
        <Gap height={30} />
        {/* <Button1
          title="Check Ticket"
          onPress={() => navigation.navigate('List')}
        /> */}
      </View>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: 400,
    height: 200,
    alignItems: 'center',
  },
  wrapper: {
    width: 230,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEBED',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
