require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan reward stick universe guess argue blue student'; 
let testAccounts = [
"0x70b208191dda1b567c83843c8d1e4095f9e9bf9542bb3c41f8c43051667917f9",
"0xe1a96240513c1b1b58db9a8f243195cebeb8ccb9cb36429e47969df981928a85",
"0x78c1e8cb6f96900b468b41dd26afed40f3a829cc25d657b0d7f74c82fb006650",
"0xab82c7c10d89afddcaa5fd4ec47a583aea3f3a8fde40963b9b66c85c471eecdd",
"0xae650a314fccca5dced83166607633f957a7aae89064e596a66dd7987dce2c3c",
"0x592ada5deb4151c34f97a755167e26fc5553d2749b615dd5f20cf71868096c6e",
"0x80330e2ad96b71ddf75d731586d733cae7f2cfc0062b6758f98f55aad5daeb36",
"0x700ac6b2528bc081a6b0d1b34d637c953d8e63cc007f2826b862030ca2380388",
"0xac0ac27740f4d5643185aafc57bfaa9b9a5b0ab409cf791789e4db856e92ce76",
"0xce840652b1692f791ef7e6e1c68b0aba176df0bd9f225af7923aa948a6381299"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

