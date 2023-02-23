const chalk = require("chalk");
const logSymbols = require("log-symbols");

const typeStyles = {
    success: [chalk.green.inverse, chalk.green],
    warning: [chalk.keyword("orange").inverse, chalk.keyword("orange")],
    info: [chalk.blue.inverse, chalk.blue],
    error: [chalk.red.bold.inverse, chalk.red],
};

module.exports = ({ type = "error", msg = "You forgot to define all options.", name = "" }) => {
    const [nameStyle, messageStyle] = typeStyles[type];
    console.log(`\n${logSymbols[type]} ${nameStyle(name || type.toUpperCase())} ${messageStyle(msg)}\n`);
};

