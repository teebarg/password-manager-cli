const meow = require("meow");
const meowHelp = require("cli-meow-help");

const flags = {
    clear: {
        type: `boolean`,
        default: false,
        alias: `c`,
        desc: `Clear the console`,
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`,
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`,
    },
    open: {
        type: `boolean`,
        default: false,
        alias: `o`,
        desc: `Retrieve a secret`,
    },
    mode: {
        type: `string`,
        default: `personal`,
        alias: `m`,
        desc: `The mode for the secret, e.g personal, work`,
    },
    name: {
        type: `string`,
        alias: `n`,
        desc: `The name of the secret`,
    },
};

const commands = {
    help: { desc: `Print help info` },
    add: { desc: `Add a new secret` },
    remove: { desc: `Remove a new secret` },
};

const helpText = meowHelp({
    name: `password-manager`,
    flags,
    commands,
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags,
};

module.exports = meow(helpText, options);
