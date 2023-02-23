const cli = require("./cli");
const { showSecret, addSecret, deleteSecret } = require("./controller");
const questions = require("./questions");

const flags = cli.flags;
const { mode, name } = flags;

exports.add = async () => {
    const response = await questions();
    const { username, password } = response;
    addSecret(response.mode, response.name, { username, password });
};

exports.show = async () => {
    showSecret(mode, name);
};

exports.del = async () => {
    deleteSecret(mode, name);
};
