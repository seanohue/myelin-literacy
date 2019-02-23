'use strict';

const {
  Broadcast: B
} = require('ranvier');

const ArgParser = require('bundles/bundle-example-lib/lib/ArgParser');

module.exports = {
  usage: 'read <readable> [page/section]',
  command: state => (args, player) => {
    if (!args || !args.length) {
      return B.sayAt(player, 'What do you want to read?');
    }

    const [targetName, ...restArgs] = args.split(' ');

    const target = 
      ArgParser.parseDot(targetName, player.room.items) ||
      ArgParser.parseDot(targetName, player.inventory);

    if (!target) {
      return B.sayAt(player, 'That isn\'t here.');
    }

    if (target.hasBehavior('readable')) {
      return target.emit('read', player, restArgs)
    }

    B.sayAt(player, `You don't know how to read ${target.name}.`);
  }
};
