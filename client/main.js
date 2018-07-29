import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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
