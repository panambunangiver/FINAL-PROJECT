import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Iconhome,
  Iconhomeactive,
  Iconpesan,
  Iconpesanactive,
  Iconprofile,
  Iconprofileactive,
} from '../../assets';
import {Warna_Utama, Warna_Disable} from '../../../src/utils/constant';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <Iconhomeactive /> : <Iconhome />;
    if (label === 'Pesanan')
      return isFocused ? <Iconpesanactive /> : <Iconpesan />;
    if (label === 'Profile')
      return isFocused ? <Iconprofileactive /> : <Iconprofile />;

    return <Iconhome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? Warna_Utama : Warna_Disable,
    marginTop: 0,
  }),
});
