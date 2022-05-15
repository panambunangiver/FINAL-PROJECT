import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {Ukiran} from '../../assets';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={Ukiran} style={styles.ukiran} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.text}>
        Please use your registration number and password to sign in to your
        account.
      </Text>
      <View style={styles.page2}>
        <Button
          color="#C4C4C4"
          title="Get Started"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#304875',
  },
  ukiran: {
    width: 410,
    height: 300,
    top: 0,
    left: 5,
  },
  welcomeText: {
    fontSize: 30,
    left: 20,
    top: 41,
    color: '#ffff',
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    top: 40,
    left: 22,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#C4C4C4',
    height: 54,
    width: 150,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2: {
    top: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
