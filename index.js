#!/usr/bin/env node

/**
 * password-manager
 * A password manager for the terminal
 *
 * @author Adeniyi Aderounmu <adeniyi.in>
 */

const init = require("./utils/init");
const cli = require("./utils/cli");
const log = require("./utils/log");
const { add, show, del } = require("./utils/password-manager");

const input = cli.input;
const flags = cli.flags;
const { clear, debug, open } = flags;

(async () => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);
    input.includes(`add`) && (await add());
    input.includes(`del`) && (await del());

    debug && log(flags);
    open && (await show());
})();
