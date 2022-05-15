import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button1 = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button1;

const styles = StyleSheet.create({
  container: {
    width: 201,
    height: 45,
    backgroundColor: '#F97C08',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#020202',
  },
});
