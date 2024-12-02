import { execSync } from "child_process";
const args = process.argv.slice(2);

const vars = args.find(arg => arg.startsWith('--vars='));
const varsString = vars.split('=')[1];
const varsObject = JSON.parse(varsString.replace(/\n/g, ''));

const hosts = Object.values(varsObject).map((value) => String(value).trim());
execSync(`echo "HOSTS=${JSON.stringify(hosts)}" >> $GITHUB_OUTPUT`)