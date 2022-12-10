import { LCDClient, Coin } from '@terra-money/terra.js';

// connect to pisco testnet
const pisco = new LCDClient({
  URL: 'https://pisco-lcd.terra.dev',
  chainID: 'pisco-1',
  isClassic: false  // if it is unset, LCDClient assumes the flag is false.
});

// connect to columbus-5 terra classic network
const terra = new LCDClient({
  URL: 'https://columbus-lcd.terra.dev',
  chainID: 'columbus-5',
  isClassic: true  // *set to true to connect terra-classic chain*
});

 //To use LocalTerra
 const localterra = new LCDClient({
   URL: 'http://localhost:1317',
   chainID: 'localterra'
 });

// get the current balance of `terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v`
const balance = terra.bank.balance('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v')
.then(result => {
  console.log(`balance: ${result}`);
});;

