import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {AvatarFoto} from '../../assets';
import {Gap} from '../../components';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <View style={styles.photo}>
            <ImageBackground source={AvatarFoto} style={styles.avatar} />
          </View>
        </View>
        <Gap height={40} />
        <View style={styles.detail}>
          <Text style={styles.title}>Giver Panambunan</Text>
          <Text>panambunangiver@gmail.com</Text>
          <Text>082296680310</Text>
          <Text>Manado, Sulawesi Utara</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 110,
    justifyContent: 'center',
    backgroundColor: '#ECEDEA',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 110,
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  detail: {
    padding: 20,
    alignItems: 'center',
    width: 315,
    height: 200,
    backgroundColor: '#ECEDEA',
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
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});
