import axios from 'axios';

const endpointPessoas = '/pessoas/';

const baseurl = axios.create({
  baseURL:
    'https://g8c2b7c2d374e22-baseexemplo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const obterLista = () => {
  return baseurl.get(endpointPessoas);
};

export const cadastrarPessoa = (pessoa) => {
  return baseurl.post(endpointPessoas, pessoa);
};

/**
 * 
 * {
    headers: {
      'Content-Type': 'application/json',
    },
  }
 * 
 */
