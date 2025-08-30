import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const link = process.argv[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    contaPalavras(texto);
  } catch(erro) {
    console.log(trataErros(erro));
  }
});