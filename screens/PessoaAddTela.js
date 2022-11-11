import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PessoaAddComponent from '../components/PessoaAddComponent';
// navigation é passado como props pois é um componente vigiado pelo Stack Navigator e renderizado como Screen
const PessoaAddTela = ({ navigation }) => {
  return (
    <View>
      <PessoaAddComponent navigation={navigation} />
    </View>
  );
};

export default PessoaAddTela;

const styles = StyleSheet.create({});
