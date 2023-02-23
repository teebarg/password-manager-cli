const { admin, db } = require("./db");
const handleError = require("./error");
const chalk = require("chalk");
const green = chalk.green;
const red = chalk.red;
const yellow = chalk.yellow;

exports.getSecret = async (mode, username) => {
    if (!mode) {
        handleError("Missing required arguments", { name: "KeyError", message: "Please enter a valid mode" });
        return;
    }
    try {
        const snapshot = await db.collection(mode).where("username", "==", username).get();
        if (snapshot.empty) {
            console.log(yellow("No matching documents."));
            return;
        }
        snapshot.forEach((doc) => {
            const { username, password } = doc.data();
            console.log(`${username}: ${green(password)}\n`);
        });
    } catch (error) {
        handleError("An error occurred", error);
    }
};

exports.showSecret = async (mode, name) => {
    if (!mode || !name) {
        handleError("Missing required arguments", { name: "KeyError", message: "Missing required arguments" });
        return
    }
    try {
        const doc = await db.collection(mode).doc(name).get();
        if (!doc.exists) {
            console.log(red("No such document!"));
        } else {
            const { username, password } = doc.data();
            console.log(`${username}: ${green(password)}\n`);
        }
    } catch (error) {
        handleError("An error occurred", error);
    }
};

exports.addSecret = async (mode, name, data) => {
    if (!mode || !name || !data) {
        handleError("Missing required arguments", { name: "KeyError", message: "Missing required arguments" });
        return;
    }
    const update = { ...data, timestamp: admin.firestore.FieldValue.serverTimestamp() }
    try {
        await db.collection(mode).doc(name).set(update, { merge: true });
        console.log(green("Password successfully added!"));
    } catch (error) {
        handleError("An error occurred", error);
    }
};

exports.deleteSecret = async (mode, name) => {
    if (!mode || !name) {
        handleError("Missing required arguments", { name: "KeyError", message: "Missing required arguments" });
        return;
    }
    try {
        await db.collection(mode).doc(name).delete();
        console.log(green("Password successfully deleted!"));
    } catch (error) {
        handleError("An error occurred", error);
    }
};
