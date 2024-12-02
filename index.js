import { writeFileSync } from "fs";
const args = process.argv.slice(2);

const vars = args.find(arg => arg.startsWith('--vars='));
const varsString = vars.split('=')[1];
const varsObject = JSON.parse(varsString.replace(/\n/g, ''));

const varsArray = Object.values(varsObject).map((value) => String(value).trim());
writeFileSync('vars.txt', JSON.stringify(varsArray))