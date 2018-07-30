import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './lib/init.js';
import './lib/adCardGame.js';
import './lib/adCardToken.js';


adGameContract = new web3.eth.contract(adCardGame.abi, '0x5871935143e4e88114a92866895b0e8d43bb4931');
var adTokenContract = new web3.eth.contract(adCardToken.abi, '0x93d9179a87ad987420c9b1622a579b3f5981c80d');

console.log(adGameContract);
console.log(adTokenContract);


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  EthBlocks.init();
  EthTools.ticker.start();

});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  currentBlock() {
        return EthBlocks.latest.number;
  },
  getBalance()
  {
    return EthTools.ticker.findOne('usd').price;
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
