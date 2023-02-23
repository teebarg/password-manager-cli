const welcome = require("./welcome");
const pkg = require("./../package.json");
const handleError = require("./error");

module.exports = ({ clear = true }) => {
    process.on("unhandledRejection", (err) => {
        handleError(`UNHANDLED ERROR`, err);
    });
    welcome({
        title: `password-manager`,
        tagLine: `by Adeniyi Aderounmu`,
        description: pkg.description,
        version: pkg.version,
        bgColor: "#36BB09",
        color: "#000000",
        bold: true,
        clear,
    });
};
