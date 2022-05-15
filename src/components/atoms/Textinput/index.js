import {StyleSheet, Text, View, TextInput as TextInputRn} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>{title}</Text>
      <TextInputRn style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    paddingHorizontal: 11,
    paddingLeft: 11,
    width: 351,
    height: 47,
  },
  page: {
    top: 120,
  },
});
