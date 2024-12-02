const core = require('node:child_process').execSync;
const args = require('minimist')(process.argv.slice(2));

// Obtém as variáveis de entrada
const vars = JSON.parse(args.vars || '{}');
console.log('Received vars:', vars);

// Processa os dados (exemplo fictício)
const hosts = ['192.168.1.1', '192.168.1.2', '192.168.1.3'];
console.log('Generated hosts:', hosts);

// Define o output
core(`echo "HOSTS=${JSON.stringify(hosts)}" >> $GITHUB_OUTPUT`);
