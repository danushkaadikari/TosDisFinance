const HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            //TODO: change to IDO contracts
            gas: 8000000,
        },
        kovan: {
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider("", "https://kovan.infura.io/v3/46e5f1638bb04dd4abb7f75bfd4f8898"),
            network_id: "42",
            from: "",
            skipDryRun: true,
        },
        testBSC: {
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider("", "https://data-seed-prebsc-2-s3.binance.org:8545/"),
            network_id: "97",
            from: "",
            skipDryRun: true,
        },
        BSC: {
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider([""], "https://bsc-dataseed.binance.org/"),
            network_id: "56",
            from: "",
            skipDryRun: true,
            //gas: 8000000,
            //gasPrice: 11000000000,// 11 gwei
        },
        ETH: {
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider([""], "https://mainnet.infura.io/v3/46e5f1638bb04dd4abb7f75bfd4f8898"),
            network_id: "1",
            from: "",
            skipDryRun: true,
            gasPrice: 22000000000,// 25 gwei
        },
        Fantom: {
            //https://explorer.testnet.fantom.network/
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider("", "https://rpc.fantom.network/"),
            network_id: "250",
            from: "",
            skipDryRun: true,
            gasPrice: 52000000000,// 52 gwei
        },
        testFantom: {
            //https://explorer.testnet.fantom.network/
            // must be a thunk, otherwise truffle commands may hang in CI
            provider: () => new HDWalletProvider("", "https://rpc.testnet.fantom.network/"),
            network_id: "4002",
            from: "",
            skipDryRun: true,
        },
    },
    mocha: {
        useColors: true,
    },
    compilers: {
        solc: {
            version: "0.6.12",
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    plugins: ["truffle-plugin-verify", "solidity-coverage", "truffle-contract-size"],
    api_keys: {
        etherscan: "",
        bscscan: "",
        ftmscan: '',
    },
};
