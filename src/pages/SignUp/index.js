import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TextInput, Button, Gap} from '../../components';
import {Checkmark} from '../../assets';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput title="Username" placeholder="Type your username" />
      <TextInput title="Email address" placeholder="Type your email address" />
      <TextInput title="Password" placeholder="Type your password" />
      <TextInput title="Phone number" placeholder="Type your phone number" />
      <Button title={'Sign Up'} onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.text1}>
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>
      <Image source={Checkmark} style={styles.gambar} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#304875',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#ffff',
    top: 100,
  },
  text1: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    top: 150,
    paddingLeft: 40,
    left: -28,
    paddingHorizontal: 0,
  },
  gambar: {
    width: 160,
    height: 120,
    top: 140,
  },
});
