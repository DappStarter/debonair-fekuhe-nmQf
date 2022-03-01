require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain smile hidden prize bone gift'; 
let testAccounts = [
"0x57f9ffeb71b2526b8119448c58bd13f15825ca108dcd3c2fb8b0caf23e64aa31",
"0xe46afbb5db0c8d6a1280b8d4d0b94139df201378e54460559af92f8e137b8b9f",
"0x3ef6ffdc90f4024c74c2e6964258fcbe50d38be4cd2db9ec6574c80e2f7a5fc0",
"0x9702f12ea982328f54e9d29052e68bab06d71d5a1844e6da8671af525ed27bc5",
"0x2280bd39cf75c9b3efef735fe5c4abfb8463b29c03d9580ed38456f382a95eac",
"0xbfd3b5c0d5c60a58bc738954106d77a234437b528ad1ad3a846f0aae2fac012d",
"0x52cd08f640b121912cd29d595e0ba891b8af1ac20e1f95e2381b0175f753c9c6",
"0x33fb291ad13a8e1510be2a919540ff04675fcd5ea85f967b467407be61d2509d",
"0xbe43692c2818229750c48d3072d731856d5e42da3174f5a862f4610210c4106f",
"0x944444d446c08cfe45000ecab04abf99fdebfcefa95c2fc402ed128e982699b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


