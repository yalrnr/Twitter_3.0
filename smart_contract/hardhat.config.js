require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/eHUno2QwEdROkOKz-duUfny6gmQdL1NH',
      accounts: [
        'a6d2ba320cd5741def9ba77e4acc4dd0e6301a8113d62e65d19496c21ac9b67a',
      ],
    },
  },
};
