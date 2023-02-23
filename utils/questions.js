const prompt = require("./prompt");

module.exports = async () => {
    const mode = await prompt({
        name: `mode`,
        message: `Secret mode?`,
        initial: `personal`,
    });
    const name = await prompt({
        name: `name`,
        message: `Secret name?`,
        hint: `(kebab-case optional)`,
    });
    const username = await prompt({
        name: `username`,
        message: `Username`,
        hint: `(application username)`,
    });
    const password = await prompt({
        name: `password`,
        message: `Password`,
        hint: `(application password)`,
    });

    const vars = {
        mode,
        name,
        username,
        password,
    };

    return vars;
};
