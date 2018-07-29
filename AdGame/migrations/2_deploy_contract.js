const AdCardToken = artifacts.require("AdCardToken");
const AdCardGame = artifacts.require("AdCardGame");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = fs.writeFile;

module.exports = async function(deployer) {
  const cryptoHerosToken = await deployer.deploy(AdCardToken, "AdGameToken", "acdc");
  const cryptoHerosGame = await deployer.deploy(AdCardGame, AdCardToken.address);

  console.log('AdCardToken address: ', AdCardToken.address);
  console.log('AdCardGame address: ', AdCardGame.address);
  // const addresses = {
  //   tokenAddress: CryptoHerosToken.address
  // };

  // await writeFile(
  //   path.join(__dirname, "..", "dapp", "src", "addresses.json"),
  //   JSON.stringify(addresses)
  // );
};

// https://github.com/ensdomains/ens/blob/master/migrations/2_deploy_contracts.js
