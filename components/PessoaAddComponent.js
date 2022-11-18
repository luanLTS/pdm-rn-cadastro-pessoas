import { StyleSheet, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Input } from '@rneui/themed';

import * as pessoaService from '../services/PessoaService';

const PessoaAddComponent = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [hobby, setHobby] = useState('');

  const addPessoa = async () => {
    try {
      const res = (await pessoaService.cadastrarPessoa({ nome, idade, hobby }))
        .data;
      console.log(res);
      ToastAndroid.show('Usuario cadastrado', ToastAndroid.LONG);
    } catch (e) {
      console.log('erro ' + e);
      ToastAndroid.show(
        'Não foi possivel cadastrar o usuario!',
        ToastAndroid.LONG
      );
    }
  };
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title>Cadastro de pessoa</Card.Title>
        <Card.Divider />
        <Input
          style={styles.textInput}
          placeholder='Nome'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={setNome}
          value={nome}
        />
        <Input
          style={styles.textInput}
          placeholder='Idade'
          leftIcon={{ type: 'font-awesome', name: 'info' }}
          onChangeText={setIdade}
          value={idade}
        />
        <Input
          style={styles.textInput}
          placeholder='Hobby'
          leftIcon={{ type: 'font-awesome', name: 'heart' }}
          onChangeText={setHobby}
          value={hobby}
        />
        <Button
          title={'Cadastrar'}
          type='outline'
          buttonStyle={styles.button}
          onPress={addPessoa}
        />
      </Card>
    </>
  );
};

export default PessoaAddComponent;

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 8,
  },
  textInput: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  button: {
    width: '100%',
    borderRadius: 10,
  },
});
