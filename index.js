import fs from 'fs';

// Captura os argumentos de linha de comando
const args = process.argv.slice(2);

// Encontra a variável --vars
const vars = args.find(arg => arg.startsWith('--vars='));
const varsString = vars.split('=')[1];

// Converte a string para objeto
const varsObject = JSON.parse(varsString.replace(/\n/g, ''));

// Converte os valores do objeto em um array de strings
const varsArray = Object.values(varsObject).map(value => String(value).trim());

// Agora define o output diretamente no arquivo $GITHUB_OUTPUT
fs.appendFileSync(process.env.GITHUB_OUTPUT, `HOSTS=${JSON.stringify(varsArray)}\n`);
