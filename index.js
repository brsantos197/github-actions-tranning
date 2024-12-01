import { getInput } from "@actions/core";

const main = async () => {
  const vars = getInput("vars");
  console.log(`vars ${JSON.parse(vars)}!`);
};

main();