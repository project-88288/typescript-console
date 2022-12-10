import { LCDClient, MsgSend, MnemonicKey } from '@terra-money/terra.js';

// create a key out of a mnemonic
const mk = new MnemonicKey({
  mnemonic:
    'satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn',
});

// connect to pisco testnet
const pisco = new LCDClient({
  URL: 'https://pisco-lcd.terra.dev',
  chainID: 'pisco-1',
  isClassic: false  // if it is unset, LCDClient assumes the flag is false.
});

// To use LocalTerra
 const localterra = new LCDClient({
   URL: 'http://localhost:1317',
   chainID: 'localterra'
 });

// a wallet can be created out of any key
// wallets abstract transaction building
const wallet = pisco.wallet(mk);

console.log(wallet);

// create a simple message that moves coin balances
const send = new MsgSend(
  'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp',
  { uluna: 1200000}
);

console.log("test from terra.js!");

wallet
  .createAndSignTx({
    msgs: [send],
    memo: 'test from terra.js!',
  })
  .then(tx => pisco.tx.broadcast(tx))
  .then(result => {
    console.log(`TX hash: ${result.txhash}`);
  });