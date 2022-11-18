import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';

import { LinearProgress } from '@rneui/themed';

import * as pessoaService from '../services/PessoaService';
import { useEffect } from 'react';

const PessoaListComponent = ({ navigation }) => {
  const [state, setState] = useState({ pessoas: [] });

  const updateList = async () => {
    setState({ pessoas: (await pessoaService.obterLista()).data.items });
  };

  useEffect(() => {
    (async () => {
      updateList();
    })();
  }, []);

  return (
    <View>
      {state.pessoas.length > 0 ? (
        <Text>Tem coisa</Text>
      ) : (
        <LinearProgress
          trackColor='#faff34'
          color='blue'
          animation={{ duration: 3000 }}></LinearProgress>
      )}
    </View>
  );
};

export default PessoaListComponent;

const styles = StyleSheet.create({});
