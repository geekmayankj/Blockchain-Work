const Mjcoin = artifacts.require("Mjcoin");

module.exports = function (deployer) {
  deployer.deploy(Mjcoin,100000);
};