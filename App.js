import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// Telas
import PessoaAddTela from './screens/PessoaAddTela';
import PessoaListTela from './screens/PessoaListTela';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/** NavigationContainer responsavel por mapear o estado de navegação do app e fazer os links entre telas
       * Interage com o SO
       */}
      <Stack.Navigator initialRouteName='PessoaAdd'>
        {/** Stack.Navigator usa a navegacao baseada em pilha */}
        {/**  Stack.Screen mapeia uma tela com um nome e qual componente deve ser exibibdo */}
        <Stack.Screen
          name='PessoaAdd'
          component={<PessoaAddTela></PessoaAddTela>}
        />
        <Stack.Screen
          name='PessoaList'
          component={<PessoaListTela></PessoaListTela>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
