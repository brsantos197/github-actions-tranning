import { getInput } from "@actions/core";

const main = async () => {
  const vars = getInput("vars");
  console.log(`vars ${vars}!`);
};

main();