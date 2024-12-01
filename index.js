const args = process.argv.slice(2);

const vars = args.find(arg => arg.startsWith('--vars='));
const varsString = vars.split('=')[1];
const varsObject = JSON.parse(varsString.replace(/\n/g, ''));

console.log(varsObject);