import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Card, Input } from '@rneui/themed';

const PessoaAddComponent = ({ navigation }) => {
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title>Cadastro de pessoa</Card.Title>
        <Card.Divider />
        <Input
          style={styles.textInput}
          placeholder='Nome'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          style={styles.textInput}
          placeholder='Idade'
          leftIcon={{ type: 'font-awesome', name: 'info' }}
        />
        <Input
          style={styles.textInput}
          placeholder='Hobby'
          leftIcon={{ type: 'font-awesome', name: 'heart' }}
        />
        <Button
          title={'Cadastrar'}
          type='outline'
          buttonStyle={styles.button}
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
