const fs = require('fs');

require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

// This is largest safe integer that javascript can handle, 53 bits.
const MAX_GAS_LIMIT = 9007199254740990;

let account;
const globalPath = "/node-data/test/keys/contract_owner.acc";
const localPath = "../node-data/test/keys/contract_owner.acc";

let privateKey;

const blockchainNode = process.env.BLOCKCHAIN_NODE || "http://blockchain-node:8545";

privateKey = "b17202c37cce9498e6f7dcdc1abd207802d09b5eee96677ea219ac867a198b91";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    paths: {
        artifacts: "./build",
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
        },
        besu: {
            url: blockchainNode,
            // network_id: "2018",
            networkCheckTimeout: 10000,
            accounts: [
                privateKey
            ],
            websockets: true,
            gasPrice: 0,
            gas: MAX_GAS_LIMIT,
            blockGasLimit: MAX_GAS_LIMIT,
            allowUnlimitedContractSize: true,
        },
        ganache: {
            url: "http://127.0.0.1:8545",
            accounts: [
                privateKey
            ],
            gasPrice: 0,
            gas: MAX_GAS_LIMIT,
            blockGasLimit: MAX_GAS_LIMIT,
            allowUnlimitedContractSize: true,
        }
    },
    solidity: {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20
          }
        }
    },
    mocha: {
        timeout: 20000
    }
};
