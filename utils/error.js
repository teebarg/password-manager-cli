const sym = require("log-symbols");
const { red, yellow } = require("chalk");

module.exports = (heading = `ERROR: `, err, displayError = true, exit = true) => {
    if (!err) return;

    console.log();
    if (displayError) {
        console.log(`${sym.error} ${red(heading)}`);
        console.log(`${sym.error} ${red(`ERROR →`)} ${err.name}`);
        console.log(`${sym.info} ${red(`REASON →`)} ${err.message}`);
        console.log(`${sym.info} ${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`);
    } else {
        console.log(`${sym.warning}  ${yellow(heading)}\n`);
    }

    if (exit) {
        process.exit(0);
    } else {
        return false;
    }
};
