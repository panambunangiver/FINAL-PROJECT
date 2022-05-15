import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, Button, Gap} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput title="Email Address" placeholder="Type your email address" />
      <TextInput title="Password" placeholder="Type your password" />

      <Button title="Sign In" onPress={() => navigation.navigate('MainApp')} />
      <Gap height={10} />
      <Button
        title="Create new account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 2,
    backgroundColor: '#304875',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#ffff',
    top: 100,
  },
});
