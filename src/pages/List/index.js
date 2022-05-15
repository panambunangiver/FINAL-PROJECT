import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {PictureHome} from '../../assets';
import {ButtonIcon} from '../../components';

const List = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={PictureHome} style={styles.PictureHome} />
      <View style={styles.container}>
        <View style={styles.bagian}>
          <ButtonIcon title="KmSaintMary" style={styles.gambar} />
        </View>
        <View style={styles.bagian}>
          <ButtonIcon title="KmPermataObi" />
        </View>
        <View style={styles.bagian}>
          <ButtonIcon title="KmBarcelona" />
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  PictureHome: {
    width: 250,
    height: 150,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 403,
    height: 508,
    justifyContent: 'space-between',
  },
  bagian: {
    width: 403,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEBED',
    borderRadius: 10,
    marginTop: 0,
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
