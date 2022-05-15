import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {
  PictureHome,
  Logo2,
  Logo,
  KmSaintMary,
  KmBarcelona,
  KmPermataObi,
} from '../../assets';
import {Button, ButtonIcon, Gap} from '../../components';

const Home = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Logo} style={styles.header}>
        {/* <Image source={Logo} style={styles.logo} /> */}
      </ImageBackground>
      {/* <View style={styles.container}>
        <ButtonIcon
          title="Km Saint Marry"
          onPress={() => navigation.navigate('Pesanan')}
        />
        <Image source={KmSaintMary} style={styles.KmSaintMary} />
      </View>
      <View style={styles.container}>
        <ButtonIcon title={'Km Permata Obi'} />
        <Image source={KmPermataObi} style={styles.KmSaintMary} />
      </View>
      <View style={styles.container}>
        <ButtonIcon title={'Km Barcelona'} />
        <Image source={KmBarcelona} style={styles.KmSaintMary} />
      </View>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          title="Cek tiket"
          onPress={() => navigation.navigate('Pesanan')}
        />
      </View> */}
      <View style={styles.container}>
        <View style={styles.bagian}>
          <ButtonIcon
            title="Daftar"
            onPress={() => navigation.navigate('List')}
          />
        </View>
        <View style={styles.bagian}>
          <ButtonIcon
            title="Pesanan"
            onPress={() => navigation.navigate('Pesanan')}
          />
        </View>
        <View style={styles.bagian}>
          <ButtonIcon
            title="Tiket"
            onPress={() => navigation.navigate('Ticket')}
          />
        </View>
        <View style={styles.bagian}>
          <ButtonIcon
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: windowWidth * 0.5,
    marginTop: 0,
    height: windowHeight * 0.2,
  },
  logo: {
    top: 70,
    width: windowWidth * 0.25,
    height: windowHeight * 0.1,
  },
  container: {
    // width: 371,
    // height: 150,
    // marginTop: 20,
    // backgroundColor: '#1E3D58',
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.46,
    // shadowRadius: 11.14,

    // elevation: 17,
    marginTop: 50,
    width: 371,
    height: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bagian: {
    width: 160,
    height: 180,
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
