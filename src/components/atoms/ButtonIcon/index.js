import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  Iconhome,
  IconKmBarcelona,
  IconKmPermataObi,
  IconKmSaintMary,
  IconList,
  IconPesanHome,
  IconPP,
  IconTicket,
  KmBarcelona,
  KmPermataObi,
  KmSaintMary,
  Paket1,
} from '../../../assets';

const ButtonIcon = ({title, onPress}) => {
  const Icon = ({onPress}) => {
    if (title === 'Datar') {
      return <IconList />;
    }
    if (title === 'Pesanan') {
      return <IconPesanHome />;
    }
    if (title === 'Tiket') {
      return <IconTicket />;
    }
    if (title === 'Profile') {
      return <IconPP />;
    }
    if (title === 'KmSaintMary') {
      return <Image source={KmSaintMary} />;
    }
    if (title === 'KmPermataObi') {
      return <Image source={KmPermataObi} />;
    }
    if (title === 'KmBarcelona') {
      return <Image source={KmBarcelona} />;
    }
    if (title === 'Km Saint Mary') {
      return <Image />;
    }
    if (title === 'Km Permata Obi') {
      return <Image />;
    }
    if (title === 'Km Barcelona') {
      return <Image />;
    }
    return <IconList />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
