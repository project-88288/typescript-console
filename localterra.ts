
import { LCDClient, MsgSend, MnemonicKey } from '@terra-money/terra.js';

// create a key out of a mnemonic
const mk = new MnemonicKey({
  mnemonic:
    'satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn',
});

// To use LocalTerra
const localterra = new LCDClient({
    URL: 'http://localhost:1317',
    chainID: 'localterra'
  });

  // a wallet can be created out of any key
// wallets abstract transaction building
const wallet = localterra.wallet(mk);

console.log(wallet);

console.log("test from terra.js!");

// create a simple message that moves coin balances
const send = new MsgSend(
    'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
    'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp',
    { uluna: 1200000}
  );

wallet
  .createAndSignTx({
    msgs: [send],
    memo: 'test from terra.js!',
  })
  .then(tx => localterra.tx.broadcast(tx))
  .then(result => {
    console.log(`TX hash: ${result.txhash}`);
  });


